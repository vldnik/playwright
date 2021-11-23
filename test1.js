Record




Target:

Playwright Test

const { test, expect } = require('@playwright/test');
test('test', async ({ page }) => {
  // Go to https://www.demoblaze.com/
  await page.goto('https://www.demoblaze.com/');
  // Click text=Phones
  await page.click('text=Phones');
  await expect(page).toHaveURL('https://www.demoblaze.com/#');
  // Click text=Monitors
  await page.click('text=Monitors');
  await expect(page).toHaveURL('https://www.demoblaze.com/#');
  // Click button:has-text("Previous")
  await page.click('button:has-text("Previous")');
  // Click text=Samsung galaxy s7
  await page.click('text=Samsung galaxy s7');
  await expect(page).toHaveURL('https://www.demoblaze.com/prod.html?idp_=4');
  // Click text=Add to cart
  page.once('dialog', dialog => {
    console.log(`Dialog message: ${dialog.message()}`);
    dialog.dismiss().catch(() => {});
  });
  await page.click('text=Add to cart');
  await expect(page).toHaveURL('https://www.demoblaze.com/prod.html?idp_=4#');
  // Click a:has-text("Sign up")
  await page.click('a:has-text("Sign up")');
  // Click text=Username: Password: >> div
  await page.click('text=Username: Password: >> div');
  // Fill text=Username: Password: >> input[type="text"]
  await page.fill('text=Username: Password: >> input[type="text"]', 'у');
  // Click text=Username: Password: >> input[type="text"]
  await page.click('text=Username: Password: >> input[type="text"]');
  // Fill text=Username: Password: >> input[type="text"]
  await page.fill('text=Username: Password: >> input[type="text"]', 'уцкпцп');
  // Click input[type="password"]
  await page.click('input[type="password"]');
  // Fill input[type="password"]
  await page.fill('input[type="password"]', 'цупwg');
  // Click button:has-text("Sign up")
  page.once('dialog', dialog => {
    console.log(`Dialog message: ${dialog.message()}`);
    dialog.dismiss().catch(() => {});
  });
  await page.click('button:has-text("Sign up")');
  // Click a:has-text("About us")
  await page.click('a:has-text("About us")');
  // Click text=About us × >> [aria-label="Close"]
  await page.click('text=About us × >> [aria-label="Close"]');
});