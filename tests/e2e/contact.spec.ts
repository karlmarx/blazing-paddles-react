import { expect, test } from '@playwright/test';
import { gotoHash, mockNetwork } from './fixtures';

test.beforeEach(async ({ page }) => {
  await mockNetwork(page);
  await gotoHash(page, '/contact');
});

test('contact form renders all fields and a submit button', async ({ page }) => {
  await expect(page.getByRole('heading', { name: /Dragon Boat Practice Sign-up/i })).toBeVisible();
  await expect(page.locator('input[name="name"]')).toBeVisible();
  await expect(page.locator('input[name="email"]')).toBeVisible();
  await expect(page.locator('textarea[name="message"]')).toBeVisible();
  await expect(page.getByRole('button', { name: /Submit/i })).toBeVisible();
});

test('typing into the name and email fields updates their values', async ({ page }) => {
  await page.locator('input[name="name"]').fill('Test Paddler');
  await page.locator('input[name="email"]').fill('paddler@example.com');
  await page.locator('textarea[name="message"]').fill('Excited to try it out');

  await expect(page.locator('input[name="name"]')).toHaveValue('Test Paddler');
  await expect(page.locator('input[name="email"]')).toHaveValue('paddler@example.com');
  await expect(page.locator('textarea[name="message"]')).toHaveValue('Excited to try it out');
});

test('contact information section shows the captain email', async ({ page }) => {
  const mail = page.locator('a[href^="mailto:WillMurphy@SOARteam.com"]');
  await expect(mail).toBeVisible();
});

test('contact page social icons open in new tabs', async ({ page }) => {
  const newTabLinks = page.locator('a[target="_blank"]');
  expect(await newTabLinks.count()).toBeGreaterThan(0);
  for (let i = 0; i < (await newTabLinks.count()); i++) {
    await expect(newTabLinks.nth(i)).toHaveAttribute('rel', /noreferrer/);
  }
});

test('submitting the form posts to Formspree without crashing the page', async ({ page }) => {
  let submitted = false;
  await page.route('https://formspree.io/**', (route) => {
    submitted = true;
    return route.fulfill({
      status: 200,
      contentType: 'application/json',
      body: JSON.stringify({ next: null }),
    });
  });
  const errors: string[] = [];
  page.on('pageerror', (err) => errors.push(err.message));

  await page.locator('input[name="name"]').fill('Test Paddler');
  await page.locator('input[name="email"]').fill('paddler@example.com');
  await page.locator('textarea[name="message"]').fill('Looking forward to it');
  await page.getByRole('button', { name: /Submit/i }).click();

  await expect.poll(() => submitted, { timeout: 10_000 }).toBe(true);
  expect(errors, errors.join('\n')).toEqual([]);
});
