import { Page, Route } from '@playwright/test';

const STATIC_ICAL = `BEGIN:VCALENDAR
VERSION:2.0
PRODID:-//Blazing Paddles//Test Fixture//EN
END:VCALENDAR
`;

export async function mockNetwork(page: Page) {
  await page.route('**/api/ical', (route: Route) =>
    route.fulfill({
      status: 200,
      contentType: 'text/calendar',
      body: STATIC_ICAL,
    }),
  );

  await page.route('https://classroom-tracker-gu6t24lssq-uk.a.run.app/**', (route: Route) =>
    route.fulfill({
      status: 200,
      contentType: 'text/calendar',
      body: STATIC_ICAL,
    }),
  );

  await page.route('https://formspree.io/**', (route: Route) =>
    route.fulfill({
      status: 200,
      contentType: 'application/json',
      body: JSON.stringify({ ok: true, next: null }),
    }),
  );

  await page.route('https://calendar.google.com/**', (route: Route) =>
    route.fulfill({ status: 200, contentType: 'text/html', body: '<html><body>cal</body></html>' }),
  );
  await page.route('https://www.google.com/maps/embed**', (route: Route) =>
    route.fulfill({ status: 200, contentType: 'text/html', body: '<html><body>map</body></html>' }),
  );

  await page.route('https://cdn.jsdelivr.net/**', (route: Route) =>
    route.fulfill({ status: 200, contentType: 'text/css', body: '' }),
  );
}

export async function gotoHash(page: Page, hashPath: string) {
  await page.goto(`/#${hashPath}`);
  await page.waitForLoadState('domcontentloaded');
}
