// 5 6
//     (0.34342435 * (6 - 5 + 1)) + 5
// 0.3434 * 2 + 5

function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
let num1 = +prompt("Nhap so 1: ");
let num2 = +prompt("Nhap so 2: ");
let random = getRndInteger(num1, num2);
alert("So ngau nhieu trong khoang 2 so vua nhap: " + random);