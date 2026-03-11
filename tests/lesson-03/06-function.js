//bai1
function multiply(a, b) {
    console.log(a * b);
}
multiply(1, 2);
multiply(3, 4);

//bai2
function findMin(a, b, c) {
    let min = a;
    if ((a >= c) && (b >= c)) min = c;
    if ((a >= b) && (c >= b)) min = b;
    return min;
}
console.log(findMin(1, 5, 9))
console.log(findMin(77, 8, 8))

//bai3
let topStudent = [];
function getTopStudents(students, threshold) {
    for (let i = 0; i <= students.length - 1; i++) {
        if ((students[i]["score"]) >= threshold) topStudent.push(students[i])
    }
    return topStudent;

}
const listStudent = [{ name: "Nhung", score: 7 }, { name: "Hang", score: 6 }, { name: "Nga", score: 10 }, { name: "Ha", score: 3 }]
console.log(getTopStudents(listStudent, 7));

//bai4
function calculateInterest(principal, rate, years) {
    return principal + principal * rate * years / 100;
}
console.log(calculateInterest(1000000, 5, 2));