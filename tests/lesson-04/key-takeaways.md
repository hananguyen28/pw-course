# 1. Phạm vi của biến
- Phạm vi (scope) xác định nơi biến có thể truy cập. Nên khai báo biến ở phạm vi nhỏ nhất có thể
- Javascript có 3 loại phạm vi:
    - Block scope
    - Function scope
    - Global scope
## 1.1 Block scope
- Biến được khai báo trong cặp ngoặc nhọn:
    - var: không bị giới hạn bởi cặp ngoặc nhọn
    - let/const: bị giới hạn bởi cặp ngoặc nhọn, ra ngoài bị **undefined**

## 2.2 Function scope
- Biến được khai báo trong 1 hàm
- Cả let/var/const ra ngoài hàm đều bị **undefined**

## 2.4 Biến toàn cục
- Biến được khai báo ở 1 dòng code tự do, không nằm trong khối hay hàm

# 2. Break and Continue
- **Break**: Dùng để thoát khỏi vòng lặp ngay lập tức
- **Continue**: Dùng để bỏ qua phần còn lại của vòng lặp hiện tại và chuyển sang lần lập tiếp theo


# 3. Vòng lập nâng cao
- ```if else if```: kiểm tra nhiều điều kiện theo thứ tự
- Ternary operator (Toán tử điều kiện): cách viết ngắn gọn cho ```if else``` đơn giản
    ```
    condition ? exprIfTrue : exprIfFalse
    ```

# 4. Câu điều kiện nâng cao
- ```For...in Loop``` : Duyệt qua các thuộc tính của 1 object
- ```forEach Method```: Method của array để thực thi một function cho mỗi phần tử

# 5. Utils functions
## String utils
```javascript
//Bỏ qua khoảng trắng
trim() //bỏ qua khoảng trắng 2 đầu
trimStart() //bỏ qua khoảng trắng bên trái
trimEnd() //bỏ qua khoảng trắng bên phải

//Chuyển đổi hoa thường
toUpperCase() //chyển đổi chữ thường thành chữ hoa
toLowerCase() //chuyển đổi chữ hoa thành chữ thường

//Kiểm tra chuỗi có bao gồm chuỗi con không
includes()

//Cắt chuỗi
split()

//Thay thế chuỗi con bằng chuỗi con khác
replace()
```

## Array utils
```javascript
//Thêm phần tử vào mảng
push(phần tử) //thêm vào cuối mảng
unshift(phần tử) //thêm vào đầu mảng
splice(vị trí, số phần tử xóa, số phần tử thêm vào) //thêm vào giữa mảng

//Xóa phần tử khỏi mảng
pop() //xóa ở cuối
shift() //xóa ở đầu
splice(vị trí, số phần tử cần xóa) //xóa ở vị trí bất kỳ

//Tìm kiếm phần tử
find() //trả về phần tử đầu tiên hợp lệ
filter() //trả về tất cả phần tử hợp lệ

//Biến đổi mảng
map() //trả về 1 mảng mới có cùng độ dài bằng cách áp dụng hàm lên từng phần tử trong mảng

//Sắp xếp mảng
arr.sort((a,b) => a - b); //sắp xếp tăng dần
arr.sort((a,b) => b - a); //sắp xếp giảm dần
```



