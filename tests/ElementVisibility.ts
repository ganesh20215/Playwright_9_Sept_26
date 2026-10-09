import { Browser, BrowserContext, chromium, firefox, Page, webkit } from "@playwright/test";


async function elementVisibilityExample() {

    let browser: Browser = await chromium.launch({
        headless: false
    });
    let context: BrowserContext = await browser.newContext();
    let page: Page = await context.newPage();
    await page.goto('https://www.letskodeit.com/practice');

    //Check element hidden or not
    // let textBox = await page.locator('#displayed-text');
    // console.log(await textBox.isHidden());  //false
    // await page.locator('#hide-textbox').click();
    // console.log(await textBox.isHidden());  //true


    //check element is enabled or disabled
    let textBox = await page.locator('#enabled-example-input');
    console.log(await textBox.isEnabled());  //true
    await page.locator('#disabled-button').click();
    console.log(await textBox.isEnabled());  //false
   
}

elementVisibilityExample();