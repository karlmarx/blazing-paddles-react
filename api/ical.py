"""Vercel serverless function: TeamSnap iCal proxy.

Fetches the team schedule from TeamSnap and serves it with browser-friendly
CORS and cache headers. Errors are surfaced generically; details are logged
server-side for diagnosis without leaking implementation details to clients.
"""

import logging
import sys
from http.server import BaseHTTPRequestHandler

import requests

# TeamSnap public iCal feed for the Blazing Paddles team schedule.
TEAMSNAP_ICS_URL = (
    "https://ical-cdn.teamsnap.com/team_schedule/"
    "761cf290-344c-0131-8dd6-3c764e04988f.ics"
)

# Browsers may revalidate before this lapses; the schedule rarely changes
# more than a few times per day, so an hour is a safe ceiling.
CACHE_MAX_AGE_SECONDS = 3600
UPSTREAM_TIMEOUT_SECONDS = 10

# Vercel captures stderr into the function logs; explicit handler makes the
# behavior identical in `vercel dev` and production.
logger = logging.getLogger("api.ical")
if not logger.handlers:
    _h = logging.StreamHandler(sys.stderr)
    _h.setFormatter(logging.Formatter("%(asctime)s %(levelname)s %(message)s"))
    logger.addHandler(_h)
logger.setLevel(logging.INFO)


def _write_cors_headers(handler: BaseHTTPRequestHandler) -> None:
    """Emit the CORS headers shared by GET and OPTIONS responses."""
    handler.send_header("Access-Control-Allow-Origin", "*")
    handler.send_header("Access-Control-Allow-Methods", "GET, OPTIONS")
    handler.send_header("Access-Control-Allow-Headers", "Content-Type")
    handler.send_header("Access-Control-Max-Age", "86400")


class handler(BaseHTTPRequestHandler):
    """Vercel-compatible handler that proxies the TeamSnap iCal feed."""

    def do_OPTIONS(self) -> None:  # noqa: N802 (BaseHTTPRequestHandler API)
        """Answer CORS preflight requests."""
        self.send_response(204)
        _write_cors_headers(self)
        self.send_header("Content-Length", "0")
        self.end_headers()

    def do_GET(self) -> None:  # noqa: N802 (BaseHTTPRequestHandler API)
        """Fetch the upstream iCal feed and stream it to the client."""
        try:
            response = requests.get(
                TEAMSNAP_ICS_URL, timeout=UPSTREAM_TIMEOUT_SECONDS
            )
        except requests.RequestException:
            logger.exception("TeamSnap iCal fetch failed (network)")
            self._send_error(502, "Bad Gateway")
            return
        except Exception:  # defensive: avoid 500 with stack trace in body
            logger.exception("TeamSnap iCal fetch failed (unexpected)")
            self._send_error(500, "Internal Server Error")
            return

        if response.status_code >= 400:
            logger.warning(
                "TeamSnap upstream returned %s", response.status_code
            )
            self._send_error(502, "Bad Gateway")
            return

        self.send_response(200)
        self.send_header("Content-Type", "text/calendar; charset=utf-8")
        self.send_header(
            "Cache-Control",
            f"public, max-age={CACHE_MAX_AGE_SECONDS}, "
            f"s-maxage={CACHE_MAX_AGE_SECONDS}",
        )
        _write_cors_headers(self)
        self.end_headers()
        self.wfile.write(response.content)

    def _send_error(self, status: int, message: str) -> None:
        """Send a generic error body without leaking exception details."""
        self.send_response(status)
        self.send_header("Content-Type", "text/plain; charset=utf-8")
        _write_cors_headers(self)
        self.end_headers()
        self.wfile.write(message.encode("utf-8"))

    def log_message(self, format: str, *args) -> None:  # noqa: A002
        """Route the default access log into our logger instead of stderr."""
        logger.info("%s - %s", self.address_string(), format % args)
