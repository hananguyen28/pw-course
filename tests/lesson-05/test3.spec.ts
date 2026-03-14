import test from "@playwright/test";

test('Test case 3', async ({ page }) => {
    await test.step('Đi đến trang https://material.playwrightvn.com/', async () => {
        await page.goto('https://material.playwrightvn.com/');
    })
    await test.step('Chọn Bài học 2: Product page', async () => {
        await page.locator("//a[text()='Bài học 3: Todo page']").click();
    })
    await test.step('Thêm mới 100 todo items có nội dung Todo <i>', async () => {
        for (let i = 1; i <= 100; i++) {
            await page.locator("//input[@id='new-task']").fill(`Todo ${i}`);
            await page.locator("//button[@id='add-task']").click();
        }
    })
    //cách 3
    await test.step('Xóa các todo có số lẻ', async () => {
        const items = page.locator("//ul[@id='task-list']/li");
        const totalItems = await items.count();
        page.on('dialog', dialog => dialog.accept());
        for (let i = totalItems - 1; i >= 0; i--) {
                const todoContent = await items.nth(i).locator("span").innerText();
                const number = Number(todoContent.split(" ")[1]);
                if (number % 2 !== 0) {
                    await items.nth(i).locator("button:text('Delete')").click();
                }    
        }
    })

    // Cách 1
    /*await test.step('Xóa các todo có số lẻ', async () => {
        const totalItems = await page.locator("//ul[@id='task-list']/li").count();
        let deletedItems = 0;
        page.on('dialog', dialog => dialog.accept());
        for (let i = 1; i <= totalItems; i++) {
            console.log(`i: ${i}, deleted Item: ${deletedItems}, đang work ở li thứ ${i-deletedItems}`)
                const todoContent = await page.locator(`//ul[@id='task-list']/li[${i - deletedItems}]/span`).innerText();
                const number = Number(todoContent.split(" ")[1]);
                if (number % 2 !== 0) {
                    await page.locator(`//ul[@id='task-list']/li[${i - deletedItems}]/div//button[text()='Delete']`).click();
                    deletedItems++;
                }    
        }
    })*/
    
    //cách 2
    // await test.step('Xóa các todo có số lẻ', async () => {
    //     const items = page.locator("//ul[@id='task-list']/li");
    //     const totalItems = await items.count();
    //     let deletedItems = 0;
    //     page.on('dialog', dialog => dialog.accept());
    //     for (let i = 0; i <= totalItems - 1; i++) {
    //             const todoContent = await items.nth(i - deletedItems).locator("span").innerText();
    //             const number = Number(todoContent.split(" ")[1]);
    //             if (number % 2 !== 0) {
    //                 await items.nth(i - deletedItems).locator("button:text('Delete')").click();
    //                 deletedItems++;
    //             }    
    //     }
    // })
})