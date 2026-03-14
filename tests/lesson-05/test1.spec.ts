import test from "@playwright/test";

test('Testcase 1', async ({ page }) => {
    await test.step('Đi đến trang https://material.playwrightvn.com/', async () => {
        await page.goto('https://material.playwrightvn.com/');

    })
    await test.step('Chọn Bài học 1', async () => {
        await page.locator("//a[contains(text(), 'Bài học 1: Register Page')]").click();
    })
    await test.step('Nhập các thông tin', async () => {
        //Điền username
        await page.locator("//input[@id='username']").fill("ChamNguyen");
        //Điền email
        await page.locator("//input[@id='email']").fill("ChamNguyen@gmail.com");
        //Chọn giới tính
        await page.locator("//input[@id='female']").check();
        //Chọn sở thích
        await page.locator("//input[@id='reading']").check();
        //Chọn lĩnh vực quan tâm
        await page.locator("//select[@id='interests']").selectOption({ label: "Technology" });
        //Chọn quốc gia
        await page.locator("//select[@id='country']").selectOption({ label: "United Kingdom" });
        //Điền ngày tháng năm sinh
        await page.locator("//input[@id='dob']").fill("2006-09-09");
        //Upload profile picture
        await page.locator("//input[@id='profile']").setInputFiles("tests/lesson-05/avatar.jpg");
        //Điền Biography
        await page.locator("//textarea[@id='bio']").fill(`Toi ten Cham Nguyen
        Toi rat thich meo va coding`);
        //Chọn rate
        await page.locator("//input[@id='rating']").focus();
        await page.keyboard.press('ArrowRight');
        //Chọn màu sắc yêu thích
        await page.locator("//input[@id='favcolor']").fill("#ff00ae");
        //Subcribe newletter
        await page.locator("//input[@id='newsletter']").check();
        //Enable feature
        await page.locator("//span[@class='slider round']").click();
        //Rating stars
        await page.locator("//div[@id='starRating']").evaluate(el => {
            el.setAttribute('data-rating', '4.5')
        })

    })
    await test.step('Click button Register', async () => {
        await page.locator("//button[@type='submit']").click();
    })
})


