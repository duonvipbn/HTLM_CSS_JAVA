// Viết chương trình nhập vào một mảng số nguyên 10 -> 20  phần tử, thực hiện sử dụng các hàm có sẵn array methods để tính tổng các số chẵn và số lẻ và hiển thị ra màn hình
// Kết quả mong muốn
// input
// [1, 2, 3, 4, 5, 6, 7, 8, 9]
// []
// “abc”

// output
// totalEven = 20 totalOdd = 25
// Mảng không có dữ liệu
// Dữ liệu không hợp lệ

function evenOdd(arr) {
    if (Array.isArray(arr)) {
        if (arr.length > 0) {
            let totalEven = 0;
            let totalOdd = 0;
            for (let i = 0; i < arr.length; i++){
                if (arr[i] >= 0) {
                    if (arr[i] % 2 === 0) {
                        totalEven += arr[i];
                    } else {
                        totalOdd += arr[i]
                    }
                }
            }
            alert(`totalEven = ${totalEven}\ntotalOdd = ${totalOdd}`);
        } else {
            alert("Mảng không có dữ liệu");
        }
    } else {
        alert("Dữ liệu không hợp lệ");
    }   
}

let inputArr = [];
let n = +prompt("nhap 10 -> 20 phần tử:");
if (n && n >= 10 && n <= 20) {
    for (let i = 0; i < n; i++) {
        let input = +prompt(`arr[${i}]=`);
        if (input) {
            inputArr.push(input);
        }
    }
    evenOdd(inputArr);
}