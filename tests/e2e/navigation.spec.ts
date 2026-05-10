import { expect, test } from '@playwright/test';
import { gotoHash, mockNetwork } from './fixtures';

test.beforeEach(async ({ page }) => {
  await mockNetwork(page);
});

const routes = [
  { hash: '/', heading: /Blazing Paddles|Paddle, or BE Paddled|Dragonboat/i },
  { hash: '/about', heading: /Blazing Paddles|Paddle, or BE Paddled/i },
  { hash: '/gallery', heading: /Wilton Manors|Puerto Rico|Synergy|Garden of Life/i },
  { hash: '/contact', heading: /Dragon Boat Practice Sign-up/i },
  { hash: '/service', heading: /Big Brothers|Children's Theatre|Waterway|Deliver/i },
  { hash: '/donate', heading: /Donate|SOAR/i },
  { hash: '/faq', heading: /practices for newbies|wear|join|fitness|swim|races/i },
  { hash: '/awards', heading: /Awards|Champions|Place|Trophy|2019|2020|2021|2022|2023/i },
];

for (const route of routes) {
  test(`route ${route.hash} renders without runtime error`, async ({ page }) => {
    const errors: string[] = [];
    page.on('pageerror', (err) => errors.push(err.message));
    await gotoHash(page, route.hash);
    await expect(page.locator('body')).toContainText(route.heading);
    expect(errors, errors.join('\n')).toEqual([]);
  });
}

test('navbar exposes the primary site sections', async ({ page }, testInfo) => {
  test.skip(testInfo.project.name === 'chromium-mobile', 'Mobile collapses nav into a hamburger');
  await gotoHash(page, '/');
  const nav = page.locator('nav').first();
  for (const label of ['Community', 'Awards', 'Gallery', 'Location', 'Events', 'Donate', 'FAQ']) {
    await expect(nav.getByText(label, { exact: false }).first()).toBeVisible();
  }
});

test('Sign Up button navigates to contact form', async ({ page }, testInfo) => {
  test.skip(testInfo.project.name === 'chromium-mobile', 'Sign Up button hidden behind hamburger on mobile');
  await gotoHash(page, '/');
  const signUp = page.getByRole('link', { name: /Sign Up/i }).first();
  await expect(signUp).toBeVisible();
  await signUp.click();
  await expect(page).toHaveURL(/#\/contact$/);
  await expect(page.getByText(/Dragon Boat Practice Sign-up/i)).toBeVisible();
});

test('navbar Gallery link navigates to gallery', async ({ page }, testInfo) => {
  test.skip(testInfo.project.name === 'chromium-mobile', 'Desktop nav only test');
  await gotoHash(page, '/');
  await page.locator('nav').getByText('Gallery', { exact: false }).first().click();
  await expect(page).toHaveURL(/#\/gallery$/);
});

test('mobile hamburger toggles the collapse menu', async ({ page }, testInfo) => {
  test.skip(testInfo.project.name !== 'chromium-mobile', 'Mobile-only test');
  await gotoHash(page, '/');
  const toggle = page.locator('nav button.lg\\:hidden').first();
  await toggle.click();
  // Material Tailwind Collapse animates open. Just verify FAQ entry becomes visible somewhere in the nav.
  const faq = page.locator('nav').getByText('FAQ', { exact: false });
  await expect(faq.first()).toBeAttached();
  // At least one occurrence should become visible after the hamburger toggles open.
  await expect.poll(async () => {
    const count = await faq.count();
    for (let i = 0; i < count; i++) {
      if (await faq.nth(i).isVisible()) return true;
    }
    return false;
  }, { timeout: 7_000 }).toBe(true);
});

test('unknown route falls back to carousel', async ({ page }) => {
  await gotoHash(page, '/this-route-does-not-exist');
  await expect(page.locator('body')).toBeVisible();
  await expect(page.locator('body')).not.toContainText(/Application error|TypeError|Cannot read/);
});
