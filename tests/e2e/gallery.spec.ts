import { expect, test } from '@playwright/test';
import { gotoHash, mockNetwork } from './fixtures';

test.beforeEach(async ({ page }) => {
  await mockNetwork(page);
  await gotoHash(page, '/gallery');
});

test('gallery shows all collection cards', async ({ page }) => {
  for (const label of [
    /Wilton Manors 2023/i,
    /Wilton Manors 2019/i,
    /Puerto Rico 2015/i,
    /Synergy 2015/i,
    /Virginia Key 2015/i,
    /Garden of Life/i,
  ]) {
    await expect(page.getByText(label).first()).toBeVisible();
  }
});

test('clicking a gallery card opens the lightbox', async ({ page }) => {
  await page.getByText(/Wilton Manors 2023/i).first().click();
  const lightbox = page.locator('.yarl__container, [class*="yarl__"]').first();
  await expect(lightbox).toBeVisible({ timeout: 7_000 });
});

test('lightbox can be closed', async ({ page }) => {
  await page.getByText(/Wilton Manors 2023/i).first().click();
  const lightbox = page.locator('.yarl__container, [class*="yarl__"]').first();
  await expect(lightbox).toBeVisible({ timeout: 7_000 });
  await page.keyboard.press('Escape');
  await expect(lightbox).toBeHidden({ timeout: 7_000 });
});
