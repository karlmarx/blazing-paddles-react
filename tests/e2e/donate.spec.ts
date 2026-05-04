import { expect, test } from '@playwright/test';
import { gotoHash, mockNetwork } from './fixtures';

test.beforeEach(async ({ page }) => {
  await mockNetwork(page);
  await gotoHash(page, '/donate');
});

test('donate page links to PayPal in a new tab', async ({ page }) => {
  const paypal = page.getByRole('link', { name: /Donate/i }).filter({
    has: page.locator('a[href*="paypal.com"], button'),
  });
  const directPaypal = page.locator('a[href*="paypal.com"]').first();
  await expect(directPaypal).toBeVisible();
  await expect(directPaypal).toHaveAttribute('target', '_blank');
  await expect(directPaypal).toHaveAttribute('rel', /noreferrer/);
});

test('donate page links to SOAR website', async ({ page }) => {
  const soar = page.locator('a[href*="soarteam.com"]').first();
  await expect(soar).toBeVisible();
  await expect(soar).toHaveAttribute('target', '_blank');
});
