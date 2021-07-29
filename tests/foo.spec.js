 const { test, expect } = require('@playwright/test');

test.describe('Acessar o site "https://www.bempromotora.com.br/"', () => {
  test('one', async ({ page }) => {
    const site = 'https://www.bempromotora.com.br/';
    await page.goto(site);
    expect(page.url()).toBe('https://www.bempromotora.com.br/');
    await page.click('xpath=//a[contains(.,´CARTÃO CONSIGNADO´)]');
    expect(await page.url()).toBe('https://www.bempromotora.com.br/cartao-consignado');
    expect(await page.isVisible('text=Cartão Consignado')).toBeTruthy();
  });

  test('two', async ({ page }) => {
    // ...
  });
});