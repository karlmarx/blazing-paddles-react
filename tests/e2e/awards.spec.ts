import { expect, test } from '@playwright/test';
import { gotoHash, mockNetwork } from './fixtures';

test.beforeEach(async ({ page }) => {
  await mockNetwork(page);
  await gotoHash(page, '/awards');
});

test('awards page renders without runtime errors', async ({ page }) => {
  const errors: string[] = [];
  page.on('pageerror', (err) => errors.push(err.message));
  await expect(page.locator('body')).toBeVisible();
  // Awards page is largely text/timeline; ensure nontrivial content rendered.
  const text = await page.locator('main, body').first().innerText();
  expect(text.length).toBeGreaterThan(100);
  expect(errors).toEqual([]);
});
