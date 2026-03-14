# 1. Fucntions advance
## 1.1 Fucntion expression
Function expression là định nghĩa function bằng cách gắn nó cho một biến
```javascript
//Function Declaration (khai báo hàm)
fucntion add(a, b){
    return a + b;
}

//Function Expression (biểu thức hàm)
const add = function (a, b){
    return a + b;
}

//So sánh cách gọi hàm
console.log(add(4, 5)); //cách gọi đều giống nhau
```

# 1.2 Lambda function (Arrow function)
Lambda function là cách viết ngắn gọn hơn cho function, lần đầu xuất hiện trong ES6, sử dụng dấu "=>"
```javascript
//Function Declaration (khai báo hàm)
fucntion add(a, b){
    return a + b;
}

//Function Expression (biểu thức hàm)
const add = function (a, b){
    return a + b;
}

//Lambda function
const add = (a, b) => {return (a + b)};
const add = (a, b) => a + b; //nếu chỉ có 1 dòng code có thể rút gọn {}

//Lambda function không có tham số
const greet = () => console.log("Hello") //phải có dấu ngoặc tròn

//Lambd function có một tham số
const cal = x => x*2 // có thể bỏ dấu ()
```
# 1.3 Anonymous function
Anonymous function là hàm ẩn danh (không có tên), được sử dụng khi fuction chỉ dùng một lần hoặc làm callback (function được truyền làm tham số của function khác)
```javascript
//named function 
function namedFunction(){
    console.log('I have a name!');
}

//Anonymous function
function(){
    console.log('I am anonymous!'); //syntax error vì không thể đứng 1 mình
}

//Anonymous function phải được sử dụng ngay
//Gán cho 1 biến
const anonymous = function(){console.log('I am anonymous!');};

//Dùng làm callback
setTimeout(function(){
    console.log('I am anonymous!');
}, 1000);
```

# 2. DOM
DOM (Document Object Model): là một giao diện lập trình tiêu chuẩn giúp biểu diễn tài liệu HTML/XML dưới dạng cây cấu trúc gồm các node
```javascript
//Các thẻ tiêu chuẩn thường gặp
//Thẻ cấu trúc
<html> //Thẻ gốc của trang
<head> //Chứa metadata: tiêu đề website, hiển thị Google
<body> //Nội dung của cả website hiển thị
<div> //Khối, container chung
<span> //Inline container
<header>, <footer>. <nav>, <section> //Thẻ ngữ nghĩa

//Thẻ nội dung
<h1> - <h6> //Tiêu đề
<p> //Đoạn văn
<a> //Liên kết
<img> //Ảnh
<ul>, <ol>, <li> //Danh sách

//Thẻ form
<form> //Biểu mẫu
<input> //Ô nhập dữ liệu
<button> //Nút bấm
<select> và <option> //dropdown
<textarea> //vùng văn bản nhiều dòng
```

# 2.1 Selector
Selector là công cụ để ta tìm được các phần tử trên web
Có 3 loại selector thường gặp:
- XPath: dùng được hầu hết các TH
- CSS selector: ngắn gọn, performance cao, không linh hoạt bằng xpath
- Playwright selector: chỉ dùng cho Playwright, không phụ thuộc vào DOM

# 2.2 Xpath
Xpath = XML path
Có 2 loại:
- Tuyệt đối: bắt đầu bởi 1 "/", đi dọc theo cây DOM
- Tương đối: bắt đầu bởi 2 "//", ```//tenthe[@thuoctinh="giatri"]``` -> nên dùng

# 3. Playwright basic syntax
# 3.1 Test
Test là đơn vị cơ bản để triển khai 1 test
```javascript
import { test } form '@playwright/test';

test('<ten test>', async ({ page }) => {
    //code của test
});
```

# 3.2 Step
Step là đơn vị nhỏ hơn Test để khai báo từng step của testcase
```javascript

await test.step('<ten step>', async () => {
    //code của step
});
```
**Note**: Step nên được mapping 1-1 với step trong testcase để dễ dàng maintain

# 3.3 Các tương tác cơ bản
```javascript
//Navigation
await page.goto('domain.com');

//Locate
page.locator("//input[@id='email']") //page.locator trả về object nên không cần await

//Click
//single click
await page.locator("//button").click();

//double click
await page.locator("//button").dbclick();

//click chuột phải
await page.locator("//button").click({
    button: 'right'
});

//click chuột kèm bấm phím khác
await page.locator("//button").click({
    modifiers: ['Shift']
});

//Input
//Fill: giống như việc paste content vào ô input
await page.locator("//input").fill('Playwright');

//pressSequentially: Giống gõ từng chữ cái vào ô input
await page.locator("//input").pressSequentially('Playwright', {delay: 100});

//Radio/checkbox
//Lấy giá trị hiện tại đang là check hay không
const isChecked = await page.locator("//input").isChecked();

//Check, uncheck
await page.locator("//input").check();
await page.locator("//input").setCheck(false);

//Select
await page.locator('//select[@id="country"]').selectOption({ label: 'USA'})

//Upload file
await page.locator("//input[@id='profile']").setInputFiles("<file-path>");
```








