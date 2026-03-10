# 1. Version control system
## 1.1 Version control system là gì ?
Version control system là hệ thống quản lý các phiên bản. Việc quản lý phiên bản giúp:
- Quản lý được lịch sử thay đổi: **Thời gian, nội dung thay đổi, người thay đổi**
- Hỗ trợ việc quay trở về phiên bản cũ

## 1.2 Phân loại Version control system
### Version control system gồm 3 loại: 
- **Local**: Lưu ở máy cá nhân
- **Centralize**: Lưu ở một máy chủ tập trung
- **Distributed**: Lưu ở nhiều máy khác nhau **(Phổ biến nhất)**

### So sánh các loại Version control system
| Tiêu chí | Local | Centralize | Distributed |
| -------- | ----- | ---------- | ----------- |
| Cộng tác | Không | Có         | Có          |
| Offline  | Có    | Không      | Có       |
| Tốc độ   | Nhanh | Phụ thuộc mạng | Nhanh   |
| Backup   | Không tự động | Có (Trên server) | Có (Ở mọi clone) |
| Độ phức tạp | Thấp | Trung bình | Cao       |


## 1.3 Git
### 1.3.1 Tác giả
*Linus Torvals*

![alt text](https://avatars.githubusercontent.com/u/1024025?v=4)

#### Đôi nét về tác giả:
- Có thể chạy code trong đầu
- Là người sáng tạo ra hệ điều hành Linux

#### Hoàn cảnh ra đời Git:
- Bấy giờ team Linux dùng BitKeeper để quản lý source code. Sau đó xảy ra bất đồng vì thành viên phía Linux có ý định reverse engineer Bitkeeper nên họ đã thu hồi lại free lisense.
- Trong tình thế đó Linus đã tạo ra git trong vòng vài tuần.

### 1.3.2 Git là gì ?
**Git** là một Distributed Version Control System, hiện tại đang được sử dung phổ biến nhất thế giới

**Ưu điểm của Git so với các VCS khác:**
- Branching, tốc độ xử lý nhanh
- Free
- Rất nhiều công ty sử dụng
### 1.3.3 Git vs Github
| Git | Github |
| --- | ------ |
|Là một phần mềm | Là một dịch vụ web |
|Được cài đặt trong máy của bạn | Host trên website |
|Là một command line tool | Là một công cụ có giao diện |
|Là công cụ quản lý phiên bản, đưa các file vào Git respositoty| Là nơi để upload Git respository |
| Có các tính năng của một Version control system | Có các tính năng của một Version control system và các tính năng khác (Github actions, Github Colipot,...)|

### 1.3.4 Git three areas
#### Git có 3 areas chính:
- Working directory: Các files bạn đang làm việc trên máy
- Staging: Khu vực lưu trữ các thay đổi của file để chuẩn bị commit
- Repository: Khu vực lưu trữ các phiên bản (dạng stack)

#### Chuyện gì xảy ra sau *git init* ? 
- Sau khi chạy ```git init```, Git tạo ra Repository và Staging Area (ban đầu đều trống).
Working Directory là thư mục project đã tồn tại sẵn và chứa các file bạn đang làm việc.
- Sau khi ```git add``` file thì trạng thái hiện tại của các file được chỉ định sẽ được đưa vào Staging để chuẩn bị commit
- Sau khi ```git commit``` file thì Git sẽ lưu các thay đổi trong Staging thành một commit (1 phiên bản) trong Repository.

### 1.3.5 Các bước cơ bản với git
1. Khởi tạo repo local ```git init``` *(chỉ làm một lần duy nhất)*
2. Tạo repo Github và liên kết tới repo local ```git remote add origin <url>``` *(chỉ làm một lần duy nhất)*
3. Thêm file vào staging ```git add .```
4. Commit file ```git commit -m "<message>"```
5. Push code ```git push origin main```
6. Kiểm tra danh sách commit ```git log```

### 1.3.6 Cấu hình git
#### Để commit được thì chúng ta cần cho git biết mình là ai.
#### Lệnh config global (config cho tất cả repo):
```
git config --global user.name "your name"
git config --global user.email "your email"
```
#### Config cho mỗi repo 1 tên khác:
```
git config user.name "your name"
git config user.email "your email"
```

### 1.3.7 Git commit convention
```<type>: <short_description>```
- Type: các loại commit:
    - chore: sửa nhỏ lẻ
    - fix: Sửa lỗi file trước đó
    - feat: thêm tính năng mới


# 2. Javascript basic
## 2.1 Comment code
```javascript
//với comment nằm trên 1 dòng
/*Với comment
nằm trên nhiều dòng*/
```

## 2.2 Biến, hằng
### 2.2.1 Cách khai báo biến
Dùng ```let``` hoặc ```var``` (Khuyên dùng let)
```javascript
let name = "Cham"
```
### 2.2.2 Cách khai báo hằng
Dùng ```const```
```javascript
const pi = 3.14
```
***Note:*** Dùng biến khi chắc chắn cần gán lại giá trị, dùng hằng khi giá trị mặc định không thay đổi

## 2.3 Kiểu dữ liệu
Javascript có 8 kiểu dữ liệu chia thành 2 nhóm chính:
- Kiểu dữ liệu nguyên thủy:
    - Number
    - String
    - Boolean
    - Undefined
    - Null
    - Symbol
    - Bigint
- Kiểu tham chiếu:
    - Object

*Dùng ```typeof <<variable>>``` để kiểm tra kiểu dữ liệu của biến*

## 2.4 Toán tử so sánh
- So sánh ``==``: Loose Equality, so sánh giá trị sau khi chuyển đổi kiểu
- So sánh ``===``: Strict Equality, so sánh giá trị và kiểu dữ liệu, không chuyển đổi kiểu (nên dùng)
- So sánh ``!=``: So sánh giá trị sau khi chuyển đổi kiểu
- So sánh ``!===``: So sánh giá trị và kiểu dữ liệu, không chuyển đổi kiểu (nên dùng)

## 2.5 Toán tử logic
- ``&& (AND)``: trả về đúng nếu 2 vế mệnh đề đều đúng
- ``|| (OR)``: trả về đúng nếu 1 trong 2 vế mệnh đề đúng

## 2.6 Toán tử một ngôi
- Chỉ cần 1 toán hạng để thực hiện
- Prefix: toán tử nằm phía trước, tăng trước, trả về sau ``++i --i``
- Postfix: toán tử nằm phía sau, trả về trước, tăng sau ``i++ i--``

## 2.7 Toán tử toán học
Cộng trừ nhân chia ``+ - * /``

## 2.8 Câu điều kiện basic ``if``
```javascript
if (condition) {
    //code
}
```
Nếu điều kiện đúng thì đoạn code logic mới chạy

## 2.9 Vòng lặp ``for``
```javascript
for (<<điều kiện khởi tạo>>; <<điều kiện lặp>>, <<cập nhật>>){
    //code
}
```
Trong đó:
- Điều kiện khởi tạo chỉ chạy 1 lần duy nhất khi vòng lặp bắt đầu
- Điều kiện lặp: Nếu đúng thì chạy tiếp, nếu sai dừng
- Cập nhật: chạy vào mỗi cuối vòng lặp, cập nhật giá trị biến đếm

















