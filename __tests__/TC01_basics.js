const { addAttach } = require('jest-html-reporters/helper')

describe('Bem Promotora', () => {
    beforeAll(async () => {
        await page.goto('https://www.bempromotora.com.br/');
    })
    test.jestPlaywrightSkip({ browsers: ['chromium'] } ,'Tela Inicial', async () => {
        const titleTelaInicial = await page.title();
        expect(titleTelaInicial).toBe('Bem Promotora - Especialista em Crédito e Empréstimo Consignado');
    })
    afterEach(async () => {
        const data = await page.screenshot()
        await addAttach(data)
    })
    afterAll(async () => {
        await browser.close();
    })
})