//bai 1
const car = {
    make: "Toyota",
    model: "Corolla",
    year: 2021
};
console.log(car.year);

//bai2
const person = {
    name: "Tom",
    address: {
        street: "Phan Dinh Phung",
        city: "Ha Noi",
        country: "VN"
    }
};
console.log(person.address.street);

//bai3
const student = {
    name: "Jerry",
    grades: {
        math: 8,
        english: 9
    }
};
console.log(student.grades.math);

//bai4
const settings = {
    volume: 3,
    brightness: 9
};
settings.volume = 8;
console.log(settings);

//bai5
const bike = {};
bike.color = "red";
console.log(bike);

//bai6
const employee = {
    name: "Tung",
    age: 7
};
delete employee.age;
console.log(employee);

//bai7
const school = {
    classA: ["An", "Binh", "Chau"],
    classB: ["Đào", "Hương", "Giang"]
};
console.log(school);


