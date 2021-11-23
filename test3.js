const { test, expect } = require('@playwright/test');
test('test', async ({ page }) => {
  // Go to https://www.demoblaze.com/prod.html?idp_=4#
  await page.goto('https://www.demoblaze.com/prod.html?idp_=4#');
  // Click text=Home (current)
  await page.click('text=Home (current)');
  await expect(page).toHaveURL('https://www.demoblaze.com/index.html');
  // Click text=PRODUCT STORE
  await page.click('text=PRODUCT STORE');
  await expect(page).toHaveURL('https://www.demoblaze.com/index.html');
  // Click text=We believe performance needs to be validated at every stage of the software deve
  await page.click('text=We believe performance needs to be validated at every stage of the software deve');
  // Click text=Get in Touch Address: 2390 El Camino Real Phone: +440 123456 Email: demo@blazeme
  await page.click('text=Get in Touch Address: 2390 El Camino Real Phone: +440 123456 Email: demo@blazeme');
  // Click h4:has-text("PRODUCT STORE")
  await page.click('h4:has-text("PRODUCT STORE")');
  // Click text=Sony vaio i7
  await page.click('text=Sony vaio i7');
  await expect(page).toHaveURL('https://www.demoblaze.com/prod.html?idp_=9');
  // Click #imgp img
  await page.click('#imgp img');
  // Click #imgp img
  await page.click('#imgp img');
  // Click text=Home (current)
  await page.click('text=Home (current)');
  await expect(page).toHaveURL('https://www.demoblaze.com/index.html');
  // Triple click a[role="button"]:has-text("Next")
  await page.click('a[role="button"]:has-text("Next")', {
    clickCount: 3
  });
  await expect(page).toHaveURL('https://www.demoblaze.com/index.html#carouselExampleIndicators');
  // Click a[role="button"]:has-text("Next")
  await page.click('a[role="button"]:has-text("Next")');
  // Click img[alt="Third slide"]
  await page.click('img[alt="Third slide"]');
  // Click img[alt="Third slide"]
  await page.click('img[alt="Third slide"]');
  // Click text=Phones
  await page.click('text=Phones');
  await expect(page).toHaveURL('https://www.demoblaze.com/index.html#');
  // Click text=Monitors
  await page.click('text=Monitors');
  await expect(page).toHaveURL('https://www.demoblaze.com/index.html#');
});