import test from "@playwright/test";

test('Test case 2', async ({ page }) => {
    await test.step('Đi đến trang https://material.playwrightvn.com/', async () => {
        await page.goto('https://material.playwrightvn.com/');
    })
    await test.step('Chọn Bài học 2: Product page', async () => {
        await page.locator("//a[text()='Bài học 2: Product page']").click();
    })
    await test.step('Add to card 2 sản phẩm 1', async () => {
        await page.locator("//button[@data-product-id='1']").click({ clickCount: 2 })

    })
    await test.step('Add to card 3 sản phẩm 2', async () => {
        await page.locator("//button[@data-product-id='2']").click({ clickCount: 3 })
    })
    await test.step('Add to card 1 sản phẩm 3', async () => {
        await page.locator("//button[@data-product-id='3']").click({ clickCount: 1 })
    })
})