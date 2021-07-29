const {chromium} = require('playwright');

(async() => {
    const browser = await chromium.launch({headless:false});
    const context = await browser.newContext();
    const page = await context.newPage();
    await page.goto('https://www.bempromotora.com.br/')

    const cartaoConsignado = await page.$('#mega-menu-item-1598 > .mega-menu-link');
    await cartaoConsignado.click();
    await page.screenshot({path:`clicouemcartaoconsignado.png`})

    const tituloDoBanner = await page.textContent('.column > .title');
    console.log('>>>>>>' + tituloDoBanner)
    
    await browser.close();
}) ()