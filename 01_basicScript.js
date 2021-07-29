const {chromium} = require('playwright');
const expect = require('expect');

(async() => {
    const browser = await chromium.launch({headless:false});
    const context = await browser.newContext();
    const page = await context.newPage();
    await page.goto('https://www.bempromotora.com.br/');
    const titleTelaInicial = await page.title();
    expect(titleTelaInicial).toBe('Bem Promotora - Especialista em Crédito e Empréstimo Consignado');

    const cartaoConsignado = await page.$('#mega-menu-item-1598 > .mega-menu-link');
    await cartaoConsignado.click();
    await page.screenshot({path:`1.png`})

    const tituloDoBanner = await page.textContent('.column > .title');
    const titleTelaCartaoConsignado = await page.title();
    expect(titleTelaCartaoConsignado).toBe('Cartão Consignado na Bem Promotora | Aposentados e Pensionistas');
    expect(tituloDoBanner).toBe('Cartão Consignado');
    await page.screenshot({path:`2.png`})

    await browser.close();
}) ()