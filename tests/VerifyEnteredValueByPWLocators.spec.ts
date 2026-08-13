import {test, expect, Locator} from '@playwright/test';

//Inbuilt Locators

test('Verify inbuilt locators', async ({page}) => {

    await page.goto('https://qaplayground.com/');
    //navigate to the Pratice page
    //await page.locator('text=Practice').nth(0).click();
    await page.getByRole('link', {name: 'Practice'}).nth(0).click();
    await expect(page).toHaveURL(/practice/);

    //1. page.getByAltText() - This locator is used to locate elements based on their alt text attribute. 
                               // It is commonly used for images or elements that have alternative text descriptions.

    let logo:Locator = page.getByAltText('QA Playground logo').nth(0); //Locate the logo using alt text
    await expect(logo).toBeVisible(); //Verify the Logo is visible on the page
    //logo.click(); Once clicked it will navigate to the home page, so commenting it out for now

/* 
    //2. page.getByText() - This locator is used to locate elements bases on their visible text content. 
    // It is useful for finding elements that contain specific text.

    const practiceHeader:Locator = page.getByText("Practice Elements").nth(10); //Full String
    const partialHeader:Locator = page.getByText("Practice").nth(10); //provided subString
    await expect(practiceHeader).toBeVisible();
    await expect(partialHeader).toBeVisible(); */

    //3. page.GetByRole
    const headerByRole: Locator = page.getByRole('heading', {name: "Practice Elements"}); 
    await expect(headerByRole).toBeVisible();

    await page.getByRole("heading", {name: "Input Fields"}).click(); // Click at Input fields iteration to use text boxes

    //4. page.getByLabel - Enter the movie name, submit it and verify the entered value
    const inputValue = 'Ramayana'
    await page.getByLabel("Movie name").fill(inputValue);
    await page.getByRole('button', {name: 'Submit'}).click();
    await expect(page.getByText(`You entered: ${inputValue}`)).toBeVisible();
   
});