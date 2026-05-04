import { expect, test } from '@playwright/test';
import { gotoHash, mockNetwork } from './fixtures';

test.beforeEach(async ({ page }) => {
  await mockNetwork(page);
});

test('events page embeds the practice calendar iframe', async ({ page }) => {
  await gotoHash(page, '/events');
  const iframe = page.locator('iframe[src*="calendar.google.com"]').first();
  await expect(iframe).toBeAttached();
  const src = await iframe.getAttribute('src');
  expect(src).toMatch(/calendar\.google\.com/);
});

test('location page embeds a Google Map iframe', async ({ page }) => {
  await gotoHash(page, '/location');
  const iframe = page.locator('iframe').first();
  await expect(iframe).toBeAttached();
  const src = await iframe.getAttribute('src');
  expect(src).toMatch(/google\.com\/maps/);
});
