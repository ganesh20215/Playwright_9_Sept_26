
import { Browser, BrowserContext, chromium, firefox, Page, webkit } from "@playwright/test";


//1. Browser
//Browser is a top-level object that represent a running browser instance such as chrome, edge, webkit.
//It is a first object we created before creting contexts & pages.

//2. BrowserContext
//BrowserConext is an isolated browser session inside a browser

//3. Page
//In a playwright page represent a single browser tab or web page where your automation actions are performed.

//Important point : Playwright by defualt run your all script in headless mode (without an UI)


async function myFirstPlaywrightScript() {
    //Browser
    let browser : Browser = await chromium.launch({
        headless : false
    });

    //to open application in incognito mode
    //let context : BrowserContext = await browser.newContext();

    //page is an object of the page class provided by typescript
    let page : Page = await browser.newPage();

    //Open application
    await page.goto('https://www.edsolearn.com/');

    await page.waitForTimeout(3000);

    //for close browser
    await browser.close();

}

myFirstPlaywrightScript();