import {test, expect} from '@playwright/test';

test('Verify locators', async ({page}) => {

    await page.goto('https://qaplayground.com/');
    //navigate to the Pratice page
    await page.locator('text=Practice').nth(0).click();
    await expect(page).toHaveURL(/practice/);

    //search practice elements and verify the section after search
    await page.locator('.new-practice-page-module__lm0KhW__searchInput').fill('Input Fields'); //tad with class
    expect(page.getByRole("heading", {name: "Input Fields"})).toBeVisible; //verify hte Input Fields section after search

    await page.getByRole('heading', {name: "Input Fields"}).click(); //Click at Input fields section
    const movie = page.locator('#movieNameInput');  //tag with id
    await movie.fill("Ramayana"); //enter the movie name
    await movie.clear(); //clear the movie name
    await expect(movie).toHaveText(''); //verify that movie name is cleared

    await page.locator('[id=movieNameInput]').fill("Ramayana"); //Enter the new movie name with attribute tag

    const enteredValue = await movie.inputValue(); //store the entered value into varaible
    console.log(`User entered ${enteredValue}`); //print the entered value

    expect(enteredValue).toBe("Ramayana"); //verify that both the values are matched or not.

    
});