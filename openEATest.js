const playwright = require('playwright');

(async () => {


    //code execution happens within in here 


    const browser = playwright["chromium"].launch({
        headless: false 
    });

    //context
 const context = await browser.newContext();

    //Page

    const page = await browser.newPage();

    //navigate to the page 
    await page.goto("https://demosite.executeautomation.com/Login.html")

await page.screenshot({path: 'ea-${Date.now}.png'});


})();
