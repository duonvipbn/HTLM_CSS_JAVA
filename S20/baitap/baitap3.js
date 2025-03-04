let input = +prompt("Nhập một chuỗi số nguyên:");

// cách 1: dùng mảng

// if (input) {
//     let number = Math.floor(input).toString();
//     let array = number.split("");
//     let length = array.length;
//     let array_reverse = [];
//     let check = 1;

//     // dao nguoc cac phan tu trong mang
//     for (let i = 0; i < length; i++) {
//         array_reverse[i] = array[length - 1 - i];
//     }
//     // so sanh 2 mang
//     for (let i = 0; i < length; i++) {
//         if (array[i] != array_reverse[i]) {
//             check = 0;
//             break;
//         }
//     }

//     if (check == 1) {
//         alert("Là số đối xứng");
//     } else {
//         alert("Không phải số đối xứng");
//     }

// } else {
//     alert("Số không hợp lệ");
// }

// cách 2: overrate

if (input) {
    let str = input.toString();
    let length = str.length;
    let check = 1;
    for (let i = 0; i <= length / 2; i++) {
        if (str[i] !== str[length - 1 - i]) {
            check = 0;
            break;
        }
    }   
    if (check == 1) {
        alert("Là số đối xứng");
    } else {
        alert("Không phải số đối xứng");
    }
} else {
    alert("Số không hợp lệ");
}