Record




Target:

Playwright Test

const { test, expect } = require('@playwright/test');
test('test', async ({ page }) => {
  // Go to https://www.demoblaze.com/prod.html?idp_=4#
  await page.goto('https://www.demoblaze.com/prod.html?idp_=4#');
  // Click a:has-text("About us")
  await page.click('a:has-text("About us")');
  // Click text=No compatible source was found for this media.
  await page.click('text=No compatible source was found for this media.');
  // Click text=About us × >> [aria-label="Close"]
  await page.click('text=About us × >> [aria-label="Close"]');
  // Click a:has-text("About us")
  await page.click('a:has-text("About us")');
  // Click text=About us × >> [aria-label="Close"]
  await page.click('text=About us × >> [aria-label="Close"]');
  // Click a:has-text("Contact")
  await page.click('a:has-text("Contact")');
  // Fill input[type="text"]
  await page.fill('input[type="text"]', 'у');
  // Click input[type="text"]
  await page.click('input[type="text"]');
  // Fill input[type="text"]
  await page.fill('input[type="text"]', 'уйацуа');
  // Press CapsLock
  await page.press('input[type="text"]', 'CapsLock');
  // Click text=Contact Email: Contact Name: Message:
  await page.click('text=Contact Email: Contact Name: Message:');
  // Fill #recipient-name
  await page.fill('#recipient-name', 's');
  // Click #recipient-name
  await page.click('#recipient-name');
  // Fill #recipient-name
  await page.fill('#recipient-name', 'sefsefes');
  // Click textarea
  await page.click('textarea');
  // Fill textarea
  await page.fill('textarea', 'yb hi ');
  // Click text=Send message
  page.once('dialog', dialog => {
    console.log(`Dialog message: ${dialog.message()}`);
    dialog.dismiss().catch(() => {});
  });
  await page.click('text=Send message');
  await expect(page).toHaveURL('https://www.demoblaze.com/prod.html?idp_=4#');
});