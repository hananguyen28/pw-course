# 1. Git Undo actions
## 1.1 Restore từ staging về working directory
```
git restore --staged <file_name>
git restore --staged .
```
## 1.2 Reset từ Repository về working directory
```
git reset HEAD~<so_commit>
```
## 1.3 Sửa commit gần nhất với ```git amend```
### Sửa message của commit gần nhất
```
git commit --amend -m"message" 
```
*hoặc*
```
1. git commit --amend 
2. Ấn i (mở chế độ insert)
3. Ấn ESC (thoát khỏi chế độ insert)
4. Gõ :wq (write and quit)
```

### Thêm file quên stage vào commit gần nhất - giữ nguyên message
```
git add <file>
git commit --amend --no-edit 
```

### Thêm file quên stage vào commit gần nhất - đồng thời sửa message
```
git add <file>
git commit --amend -m"message"
```

# 2. Git branch
Git sử dụng nhánh để tạo ra các phiên bản riêng của code

Sau ```git init``` sẽ tạo ra nhánh mặc định, câu lệnh
```git config --global init.defaultBranch main``` khởi tạo nhánh mặc định là ```main```

## Xem danh sách nhánh
```git branch```

## Checkout sang nhánh khác
```git checkout <branch_name>```

## Checkout đồng thời tạo nhánh mới
```git checkout -b <branch_name>```

## Xóa 1 nhánh
```git branch -D <branch_name>```  *Note: phải đứng ở nhánh khác*

*Note: Luôn pull code về trước khi tạo nhánh mới*

# 3. Git ignore
```.gitignore``` chứa các file và thư mục mà bạn không muốn git theo dõi (untracked)

# 4. Javascript convention
```javascript
//snake_case
VD: nguyen_cham

//camelCase -- Đặt tên biến, hàm
VD: nguyenCham

//kebab-case -- Đặt tên file, folder
VD: nguyen-cham

//PascalCase -- Đặt tên class
VD: NguyenCham

//UPPER_CASE
VD: NGUYEN_CHAM
```

# 5. Console log nâng cao
```javascript
const myName = 'Cham'
console.log(`My name is ${myName}.`)
//hoặc
console.log('My name is ' + myName)
```

# 6. Object
Lưu trữ dữ liệu dưới dạng key - value trong đó:
- key: quy tắc đặt tên giống biến
- value: có kiểu giống biến hoặc là 1 object khác

```javascript
const myInfor = {
    name: "Cham",
    age: 10,
    height: 165,
    isCute: true,
    classInfor: {
        className: "Playwright",
        level: "Junior"
    }
}

//truy cập các thuộc tính của object
console.log(myInfor.name);
console.log(myInfor["name"]);
console.log(myInfor.classInfor.className);
console.log(myInfor["classInfor"]["level"]);
```
# 7. Array
```javascript
const arr = [1,2,3,4,5]
```
- Độ dài mảng = ``arr.length``
- Lấy phần tử theo index ``arr[i]``, ``i = 0`` to ``arr.length - 1``

# 8. Function
Function là hàm, là đoạn code được đặt tên và có thể được tái sử dụng, thực hiện một nhiệm vụ cụ thể
```javascript
function functionName() {
    //code
}
```
- Function có thể có parameter hoặc không
- Cần return khi cần return giá trị ra ngoài hoặc cần thoát function sớm

