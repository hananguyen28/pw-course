import test from "@playwright/test";

test('Test get todo by id', { tag: ['@TC009', '@api', '@smoke'] }, async({request}) => {
    const response = await request.get(`https://material.playwrightvn.com/api/todo-app/v1/todo.php?id=51`);
    console.log(await response.json())
})
