const puppeteer = require('puppeteer')

function wait(milliseconds){
    return new Promise(r => setTimeout(r, milliseconds));
}

async function start(url, count){
    console.log(url)
    const browser = await puppeteer.launch({
        headless: false
    });

    console.log(count)
    for(let i = 0; i < count; i++){
        const page = await browser.newPage();
        await wait(2000)
        // Navigate to the endpoint URL
        await page.goto(url);

        await page.$eval('#start', el => el.click())

        await page.waitForSelector('#streamset', {timeout: 10 * 1000})
        await page.$eval('#streamset', el => el.click())
        
        await page.waitForSelector('#\\31 ', {timeout: 10 * 1000})
        await page.$eval('#\\31 ', el => el.click())

        await page.waitForSelector('#watch', {timeout: 10 * 1000})
        await page.$eval('#watch', el => el.click())
    }

  
    // Perform any necessary interactions (e.g. selecting a room, starting a stream)
  
    // Wait for the test duration to elapse
    // await page.waitForTimeout();
  
    // await browser.close();  
}

start(process.argv[2], process.argv[3])