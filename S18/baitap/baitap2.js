let toan = 1;
let van = 7;
let anh = 9;
let diemTrungBinh = (toan + van + anh) / 3;
if (diemTrungBinh >= 8) {
    alert("gioi");
}else if (diemTrungBinh >= 6.5 && diemTrungBinh <= 7.9) {
    alert("kha");
}else if (diemTrungBinh >= 5 && diemTrungBinh <= 6.4) {
    alert("trung binh");
} else {
    alert("yeu");
}

