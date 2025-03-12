// Viết chương trình nhập vào mảng số nguyên 10 -> 20 phần tử.thực hiện lọc và các số nguyên tố là số lẻ và hiển thị lên màn hình.
// Kết quả mong muốn

// input
// [10, 2, 3, 5, 7, 9]
// []
// “abc”

// output
// [3, 5, 7]
// Mảng không có dữ liệu
// Dữ liệu không hợp lệ

function filter(arr) {
    if (Array.isArray(arr)) {
        if (arr.length > 0) {
            let newArr = [];
            for (let i = 0; i < arr.length; i++){
                if ((arr[i] % 2 !== 0) && (arr[i] > 1) && (Number.isInteger(arr[i]))) {
                    let laSoNguyenTo = true;
                    for (let j = 2; j < arr[i]; j++){
                        if (arr[i] % j === 0) {
                            laSoNguyenTo = false;
                            break;
                        }
                    }
                    if (laSoNguyenTo) {
                        newArr.push(arr[i]);
                    }
                }
            }
            alert(`[${newArr.join(", ")}]`);
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
    for (let i = 0; i < n; i++){
        let input = +prompt(`arr[${i}]=`);
        if (input) {
            inputArr.push(input);
        }
    }
    filter(inputArr);
}