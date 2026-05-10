import { expect, test } from '@playwright/test';
import { gotoHash, mockNetwork } from './fixtures';

test.beforeEach(async ({ page }) => {
  await mockNetwork(page);
  await gotoHash(page, '/');
});

test('footer shows section headers and copyright', async ({ page }) => {
  const footer = page.locator('footer');
  await expect(footer).toBeVisible();
  for (const title of ['Team', 'Info', 'Connect']) {
    await expect(footer.getByText(title, { exact: true })).toBeVisible();
  }
  await expect(footer).toContainText(/All rights reserved.*Blazing\s*Paddles/);
});

test('footer external links open in new tab with rel=noreferrer', async ({ page }) => {
  const footer = page.locator('footer');
  const externalAnchors = footer.locator('a[target="_blank"]');
  const count = await externalAnchors.count();
  expect(count).toBeGreaterThan(0);
  for (let i = 0; i < count; i++) {
    const a = externalAnchors.nth(i);
    await expect(a).toHaveAttribute('rel', /noreferrer/);
    const href = await a.getAttribute('href');
    expect(href).toBeTruthy();
    expect(href).toMatch(/^https?:\/\//);
  }
});

test('footer waiver link points at jotform', async ({ page }) => {
  const waiver = page.locator('footer').getByText('Waiver', { exact: true });
  await expect(waiver).toBeVisible();
  const anchor = waiver.locator('xpath=ancestor::a[1]');
  await expect(anchor).toHaveAttribute('href', /jotform\.com/);
});

test('footer team links navigate to internal routes', async ({ page }) => {
  const footer = page.locator('footer');
  await footer.getByText('Awards', { exact: true }).click();
  await expect(page).toHaveURL(/#\/awards$/);
});

test('footer info → FAQ link navigates internally', async ({ page }) => {
  const footer = page.locator('footer');
  await footer.getByText('FAQ', { exact: true }).click();
  await expect(page).toHaveURL(/#\/faq$/);
});

test('footer connect → contact link navigates internally', async ({ page }) => {
  const footer = page.locator('footer');
  await footer.getByText('Contact', { exact: true }).click();
  await expect(page).toHaveURL(/#\/contact$/);
});
