import test from "@playwright/test";

test.describe("Full methods", async () => {
  let id: number;
  test("1. Create todo", { tag: ['@TC007', '@api'] }, async ({ request }) => {
    const response = await request.post(
      `https://material.playwrightvn.com/api/todo-app/v1/todo.php?id=51`,
      {
        data: {
          title: "Cham - auto 2",
          description: "Write comprehensive docs for the API",
          status: "pending",
          priority: "high",
          due_date: "2026-10-25T17:00:00",
          user_id: 1,
        },
      },
    );
    const responseBody = await response.json();
    id = responseBody.todo.id;
    console.log(await response.json());
    console.log(id);
  });
  test("2. Delete todo", { tag: ['@TC008', '@api'] }, async ({ request }) => {
    const response = await request.delete(
      `https://material.playwrightvn.com/api/todo-app/v1/todo.php?id=51`,
      { data: { id: id } },
    );
  });
});
