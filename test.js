const { test, expect } = require('@playwright/test');
test('test', async ({ page }) => {
  // Go to https://www.demoblaze.com/
  await page.goto('https://www.demoblaze.com/');
  // Double click a[role="button"]:has-text("Next")
  await page.dblclick('a[role="button"]:has-text("Next")');
  await expect(page).toHaveURL('https://www.demoblaze.com/#carouselExampleIndicators');
  // Click button:has-text("Next")
  await page.click('button:has-text("Next")');
  // Click text=Apple monitor 24
  await page.click('text=Apple monitor 24');
  await expect(page).toHaveURL('https://www.demoblaze.com/prod.html?idp_=10');
  // Click #imgp img
  await page.click('#imgp img');
  // Click text=LED Cinema Display features a 27-inch glossy LED-backlit TFT active-matrix LCD d
  await page.click('text=LED Cinema Display features a 27-inch glossy LED-backlit TFT active-matrix LCD d');
  // Click text=Add to cart
  page.once('dialog', dialog => {
    console.log(`Dialog message: ${dialog.message()}`);
    dialog.dismiss().catch(() => {});
  });
  await page.click('text=Add to cart');
  await expect(page).toHaveURL('https://www.demoblaze.com/prod.html?idp_=10#');
  // Click text=Home (current)
  await page.click('text=Home (current)');
  await expect(page).toHaveURL('https://www.demoblaze.com/index.html');
  // Click text=We believe performance needs to be validated at every stage of the software deve
  await page.click('text=We believe performance needs to be validated at every stage of the software deve');
  // Click #fotcont img
  await page.click('#fotcont img');
  // Click text=Cart
  await page.click('text=Cart');
  await expect(page).toHaveURL('https://www.demoblaze.com/cart.html');
  // Click text=Delete
  await Promise.all([
    page.waitForNavigation(/*{ url: 'https://www.demoblaze.com/cart.html#' }*/),
    page.click('text=Delete')
  ]);
  // Click text=PRODUCT STORE Home (current) Contact About us Cart Log in Log out Sign up
  await page.click('text=PRODUCT STORE Home (current) Contact About us Cart Log in Log out Sign up');
  // Click text=About us × >> [aria-label="Close"]
  await page.click('text=About us × >> [aria-label="Close"]');
});