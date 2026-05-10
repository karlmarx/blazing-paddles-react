import { expect, test } from '@playwright/test';
import { gotoHash, mockNetwork } from './fixtures';

test.beforeEach(async ({ page }) => {
  await mockNetwork(page);
  await gotoHash(page, '/service');
});

test('service page lists all four community partners', async ({ page }) => {
  for (const label of [
    /Big Brothers/i,
    /Children's Theatre|FLCT/i,
    /Waterway/i,
    /Deliver the Dream/i,
  ]) {
    await expect(page.getByText(label).first()).toBeVisible();
  }
});

test('partner buttons point at their external sites', async ({ page }) => {
  const expectations: Array<[string | RegExp, RegExp]> = [
    [/BBBS/i, /bbbsbroward\.org/],
    [/FLCT/i, /flct\.org/],
    [/Waterway Cleanup/i, /waterwaycleanup\.org/],
    [/Deliver the Dream/i, /deliverthedream\.org/],
  ];
  for (const [label, urlPattern] of expectations) {
    const link = page.getByRole('link', { name: label }).first();
    const href = await link.getAttribute('href');
    expect(href ?? '').toMatch(urlPattern);
  }
});
