import {test, expect} from '@playwright/test';

test('Verify title of the page', async ({page}) => {
  // Navigate to the page
  await page.goto('https://qaplayground.com/');
  // Verify the full/exact title
  await expect(page).toHaveTitle('QA Playground — Practice Selenium, Playwright & Cypress');

  await expect(page).toHaveTitle(/Playwright/); // Verify title using regex
  await expect(page).toHaveTitle(/Playwright/i); // Verify title using regex with case-insensitive flag

  //Get the title of the page and verify it using expect
  const title = await page.title();
  expect(title).toBe('QA Playground — Practice Selenium, Playwright & Cypress');

})