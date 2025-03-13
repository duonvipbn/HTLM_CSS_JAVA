// Xây dựng menu tính toán trên hai số, gồm các chức năng

// Cộng hai số.
// Trừ hai số.
// Nhân hai số.
// Chia hai số.
//     Thoát.
let add = function(a, b) {
    return a + b;
}
let subtract = function (a, b) {
    return a - b;
}
let multiply = function (a, b) {
    return a * b;
}
let divide = function (a, b) {
    return a / b;
}
let choice;
do {
    choice = +prompt("MENU\n1.Cộng hai số.\n2.Trừ hai số.\n3.Nhân hai số.\n4.Chia hai số.\n5.Thoat\nLua chon cua ban:");
    let a = 10;
    let b = 10;
    switch (choice) {
        case 1:
            alert(add(a, b));
            break;
        case 2:
            alert(subtract(a, b));
            break;
        case 3:
            alert(multiply(a, b));
            break;
        case 4:
            alert(divide(a, b));
            break;
        case 5:
            alert("Thoat");
            break;
        default:
            alert("Lua chon sai!");
            break;
    }
} while (choice !== 5);