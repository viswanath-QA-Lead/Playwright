import {test, expect, Locator} from '@playwright/test';

//Inbuilt Locators

test('Verify inbuilt locators', async ({page}) => {

    await page.goto('https://qaplayground.com/');
    //navigate to the Pratice page
    //await page.locator('text=Practice').nth(0).click();
    await page.getByRole('link', {name: 'Practice'}).nth(0).click();
    await expect(page).toHaveURL(/practice/);

    /**
     * Get the locator where it is matching with multiple elements. 
     * Get the count and print all the element values using for loop.
     */

    let practiceLink = page.getByRole('link', {name: 'Practice'});

    await practiceLink.first().textContent();

    const practiceLinks = await practiceLink.count();
    console.log("Total list:", practiceLinks);

    let totalPracticeLinks:string[] = await practiceLink.allTextContents();

    for(let pt of totalPracticeLinks){
        console.log(pt)
    }
});