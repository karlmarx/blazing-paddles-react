import requests
from http.server import BaseHTTPRequestHandler

class handler(BaseHTTPRequestHandler):
    def do_GET(self):
        # Target URL from TeamSnap
        url = "https://ical-cdn.teamsnap.com/team_schedule/761cf290-344c-0131-8dd6-3c764e04988f.ics"
        
        try:
            # Fetch the ICS data
            response = requests.get(url, timeout=10)
            
            # Send success response with CORS headers
            self.send_response(response.status_code)
            self.send_header('Content-type', 'text/calendar')
            self.send_header('Access-Control-Allow-Origin', '*')
            self.end_headers()
            
            # Write the content
            self.wfile.write(response.content)
            
        except Exception as e:
            # Handle errors
            self.send_response(500)
            self.send_header('Content-type', 'text/plain')
            self.send_header('Access-Control-Allow-Origin', '*')
            self.end_headers()
            self.wfile.write(f"Proxy Error: {str(e)}".encode())
