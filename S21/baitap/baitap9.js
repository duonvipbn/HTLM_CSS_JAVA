let input = +prompt("nhap so nguyen bat ky:");
let laSoNguyenTo = true;
if (input && input > 1) {
    for (i = 2; i < input; i++){
        if (input % i == 0) {
            laSoNguyenTo = false;
            break;
        }
    }
    if (laSoNguyenTo) {
        alert("Là số nguyên tố");
    } else {
        alert("không là số nguyên tố");
    }
}