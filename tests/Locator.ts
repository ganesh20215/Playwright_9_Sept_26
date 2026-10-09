import { Browser, BrowserContext, chromium, firefox, Page, webkit } from "@playwright/test";

//DOM (Document Object Module)

//HTML (Hypertext Markup Language)
//Used for developed static web pages
//

//CSS (Cascading Style Sheet)
//Used for styling purpose like font design, image sytling, color defining

//Javascript/Typescript/RractJs/AngularJs/Java/ASP.net
//When we have to developed any dynamic application that time above any scripting language we have to use.


// Locators
// A Locator in Playwright is used to find and interact with elements on a web page.
// Playwright locators are auto-waiting, meaning they automatically wait for elements to be visible, enabled, and ready before performing actions.

//Playwright by default uses CSS locator's

//ID locator


async function locatorExample() {

    let browser: Browser = await chromium.launch({
        headless: false
    });

    let context: BrowserContext = await browser.newContext();

    let page: Page = await context.newPage();

    //Id Locator
    // await page.goto('https://mail.rediff.com/cgi-bin/login.cgi');
    // const userNameTextBox = page.locator("input[id='login1']");
    // userNameTextBox.fill("Dilip Sargar");

    //Optimized Way
    // const userNameTextBox = page.locator("#login1");
    // userNameTextBox.fill("Dilip Sargar");

    //Class Locator
    // await page.goto('https://mail.rediff.com/cgi-bin/login.cgi');
    // page.locator("input[class='email-input']").fill("Dilip Sargar");

    //optimized way
    // await page.goto('https://mail.rediff.com/cgi-bin/login.cgi');
    // page.locator(".email-input").fill("Manish Sharma");

    //getByText()
    // await page.goto('https://mail.rediff.com/cgi-bin/login.cgi');
    // page.getByText("Get a new Rediffmail ID").click();

    //getByPlaceholder()
    // await page.goto('https://www.letskodeit.com/practice');
    // page.getByPlaceholder("Enter Your Name").fill("Tufik Pathan");

    //getByTitle()
    // await page.goto('https://mail.rediff.com/cgi-bin/login.cgi');
    // page.getByTitle("3rd party ad content").click();

    //getByRole()
    // await page.goto('https://www.saucedemo.com/');
    // page.getByRole('button', {name:'Login', exact : true}).click();

    //getByLable()
    await page.goto('https://the-internet.herokuapp.com/login', {
        timeout : 60000
    });
    page.getByLabel('Username').fill('Omkar Sutar');


    //nth() Locator
    // await page.goto('https://www.letskodeit.com/practice');
    // page.locator(".inputs ").nth(2).fill("Pravin Warke");

    //first() Locator
    // await page.goto('https://www.letskodeit.com/practice');
    // page.locator(".inputs ").first().fill("Pravin Warke");

    //last() Locator
    // await page.goto('https://www.letskodeit.com/practice');
    // page.locator(".inputs ").last().fill("Pravin Warke");

    //has-text() Locator
    // await page.goto('https://www.letskodeit.com/practice');
    // page.locator("button:has-text('Open Window')").click();

    //and() Locator
    // await page.goto('https://www.letskodeit.com/practice');
    // page.locator("button:has-text('Open Window')").and(page.locator('#openwindow')).click();

    //or() Locator
    // await page.goto('https://www.letskodeit.com/practice');
    // page.locator("button:has-text('Open Window')").or(page.locator('#openwindow')).click();



}

locatorExample();