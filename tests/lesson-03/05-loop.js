//bài 1
let sum = 0;
for (let i = 1; i <= 100; i++) {
    sum += i;
};
console.log(sum);

//bai2
for (let i = 2; i <= 9; i++) {
    console.log(`Bang cuu chuong ${i} :`)
    for (let j = 1; j <= 9; j++) {
        console.log(`${i} x ${j} = ${i * j}`)
    }
}

//bai3
let arr = [];
for (let i = 1; i <= 99; i++) {
    if (i % 2 !== 0) {
        arr.push(i);
    }
}
console.log(arr);

//bai4
for (let i = 1; i <= 10; i++) {
    console.log(`user${i}@example.com`);
}

//bai5
const doanhThu = [{ month: 1, total: 10 }, { month: 2, total: 34 }, { month: 3, total: 67 }, { month: 4, total: 100 }, { month: 5, total: 11 }, { month: 6, total: 1 }, { month: 7, total: 3 }, { month: 8, total: 23 }, { month: 9, total: 10 }, { month: 10, total: 10 }, { month: 11, total: 101 }, { month: 12, total: 103 }]
let tongDoanhThu = 0;
for (let i = 0; i <= 11; i++) {
    tongDoanhThu += doanhThu[i]["total"];
}
console.log(tongDoanhThu);