import { Browser, BrowserContext, chromium, firefox, Page, webkit } from "@playwright/test";

//xpath in playwright
//XPath stands for XML Path Language. 
// XPath is a technique that is used to navigate through the HTML structure of a webpage. 
//Two type of xpath we have
//1. Absoulte xpath
//2. Relative xpath

//1. Absoulte xpath
//It is the direct way to find the element from root node.
//Absolute Xpath always start with / (single forward slash)
//Example : /html/body/div/div/div[2]/div[1]/div/div/form/input

//2. Relative xpath
//Relative xpath always start from middle of DOM structure
//RXP always start with // (Double forward slash)
//Syantax : tagName[@attributeName='Value']


async function xpathExample() {

    let browser: Browser = await chromium.launch({
        headless: false
    });
    let context: BrowserContext = await browser.newContext();
    let page: Page = await context.newPage();

    //Absoulte Xpath
    // await page.goto('https://www.saucedemo.com/');
    // page.locator('/html/body/div/div/div[2]/div[1]/div/div/form/input').click();

    //Relative xpath
    // await page.goto('https://www.saucedemo.com/');
    // page.locator("//input[@id='login-button']").click();

    //XPath Text() Function
    // await page.goto('https://mail.rediff.com/cgi-bin/login.cgi');
    // page.locator("//a[text()='Get a new Rediffmail ID']").click();

    //starts-with()
    //a[starts-with(text(),'Forgot')]
    //input[starts-with(@class,'email')]

    //contains()
    //a[contains(text(),'got')]

    //Xpath Axes
    //When we have to locate many dynamic elements that time we have to use XPath axes.

    //Following
    //When we have to get all elements from current node
    //input[@id='login1']//following::input

    //ancestor : we can select parent and grandparent from current node
    //input[@id='login1']//ancestor::div

    //Child : select child elements of current node
    //(//div[@class='form-group'])[1]//child::div

    //Following-sibling : select brother and sister's of current node
    //(//div[@class='form-group'])[1]//following-sibling::div

    //Parent : we can fetch parent node from current node
    //(//div[@class='form-group'])[1]//parent::form

    //Descendant: we can fetch child or grand child elements from current node
    //(//div[@class='form-group'])[1]//descendant::input
}

xpathExample();


//Hello Everyone Good Evening...


