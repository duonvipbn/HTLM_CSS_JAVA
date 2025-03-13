// Xây dựng menu xử lý số nguyên, gồm các chức năng:

// Nhập danh sách số nguyên.
// Tính trung bình các số.
// Tìm số chẵn lớn nhất.
// Tìm số lẻ nhỏ nhất.
//     Thoát.
function addInt() {
    let n = +prompt("Nhap so luong so nguyen:");
    if (n && n > 0) {
        for (let i = 0; i < n; i++) {
            let input = +prompt(`Nhap so nguyen thu ${i + 1}:`);
            if (input) {
                arr.push(input);
            }
        }
    } else {
        alert("sai input");
    }
}
function medium() {
    let sum = 0;
    for (let i = 0; i < arr.length; i++){
        sum += arr[i];
    }
    sum = sum / arr.length;
    alert(sum);
}
function highestEven() {
    let highestEven = -Infinity;
    for (let i = 0; i < arr.length; i++){
        if (arr[i] % 2 == 0 && highestEven < arr[i]) {
            highestEven = arr[i];
        }
    }
    alert(`số chẵn lớn nhất: ${highestEven}`);
}
function lowestodd() {
    let lowestodd = Infinity;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 !== 0 && lowestodd > arr[i]) {
            lowestodd = arr[i];
        }
    }
    alert(`số lẻ nhỏ nhất: ${lowestodd}`);
}
let choice;
let arr = [];
do {
    choice = +prompt("MENU\n1.Nhập danh sách số nguyên.\n2.Tính trung bình các số.\n3.Tìm số chẵn lớn nhất.\n4.Tìm số lẻ nhỏ nhất.\n5.Thoát.\nLua chon cau ban:");
    switch (choice) {
        case 1:
            addInt();
            break;
        case 2:
            if (arr.length > 0) {
                medium();
            } else {
                alert("Mang rong");
            }
            break;
        case 3:
            if (arr.length > 0) {
                highestEven();
            } else {
                alert("Mang rong");
            }
            break;
        case 4:
            if (arr.length > 0) {
                lowestodd();
            } else {
                alert("Mang rong");
            }
            break;
        case 5:
            alert("Thoat");
            break;
        default:
            alert("Lua chon sai");
            break;
    }
} while (choice !== 5);