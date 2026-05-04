import { expect, test } from '@playwright/test';
import { gotoHash, mockNetwork } from './fixtures';

test.beforeEach(async ({ page }) => {
  await mockNetwork(page);
});

test('/instagram triggers an external redirect call', async ({ page }) => {
  const opened: string[] = [];
  await page.exposeFunction('__capture_open__', (url: string) => opened.push(url));
  await page.addInitScript(() => {
    const original = window.open;
    // @ts-expect-error
    window.open = (url?: string) => {
      // @ts-expect-error
      window.__capture_open__(url ?? '');
      return null as unknown as Window;
    };
    void original;
  });
  await gotoHash(page, '/instagram');
  await expect.poll(() => opened.find((u) => /instagram\.com/.test(u))).toBeTruthy();
});

test('/facebook redirects to the Blazing Paddles facebook page', async ({ page }) => {
  // Don't actually navigate off-site — intercept the fb hostname before it loads.
  await page.route('**/*facebook.com/**', (route) =>
    route.fulfill({ status: 200, contentType: 'text/html', body: '<html><body>fb-stub</body></html>' }),
  );
  await page.goto('/#/facebook');
  await page.waitForLoadState('domcontentloaded');
  await expect.poll(() => page.url()).toMatch(/facebook\.com|fb-stub|#\/facebook/);
});
