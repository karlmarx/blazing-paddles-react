import { expect, test } from '@playwright/test';
import { gotoHash, mockNetwork } from './fixtures';

test.beforeEach(async ({ page }) => {
  await mockNetwork(page);
  await gotoHash(page, '/faq');
});

const questions = [
  /When are practices for newbies/i,
  /What should I wear/i,
  /How do I join the Blazing Paddles Team/i,
  /level of fitness is needed/i,
  /know how to swim/i,
  /Is it safe to be on a dragon boat/i,
  /When and where are the races/i,
];

test('all FAQ questions are visible', async ({ page }) => {
  for (const q of questions) {
    await expect(page.getByText(q).first()).toBeVisible();
  }
});

test('clicking the first question expands it', async ({ page }) => {
  const trigger = page.getByText(questions[0]).first();
  await trigger.click();
  await expect(page.getByRole('link', { name: /Sign Up/i }).first()).toBeVisible({ timeout: 7_000 });
});

test('FAQ Sign Up link routes to contact page', async ({ page }) => {
  await page.getByText(questions[0]).first().click();
  // The first accordion body contains two /contact links: an inline text Link and
  // a Button-wrapped Link. The Button one is the last in DOM order and is
  // reliably clickable across viewports.
  const signUpLinks = page.locator('a[href$="/contact"]').filter({ hasText: /Sign Up/i });
  const target = signUpLinks.last();
  await expect(target).toBeAttached({ timeout: 7_000 });
  await target.scrollIntoViewIfNeeded();
  await target.click();
  await expect(page).toHaveURL(/#\/contact$/);
});
