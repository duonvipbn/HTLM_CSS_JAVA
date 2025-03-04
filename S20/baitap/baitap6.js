// sỗ nguyên tố lớn hơn 1 chỉ có 2 ước 1 và chính nó
let input = +prompt("nhập số nguyên:");
let flag = 1;
if (input && (input > 1)) {
    for (let i = 2; i < input; i++) {
        if (input % i == 0) {
            flag = 0;
            break;
        }
    }
    flag == 1 ? alert("Là số nguyên tố") : alert("Không phải là số nguyên tố");
} else {
    alert("Không phải là số nguyên tố");
}