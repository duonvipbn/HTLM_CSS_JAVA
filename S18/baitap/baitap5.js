let year_Input = +prompt("Nhap so nam kinh nghiem cua nhan vien:");

if (year_Input < 1) {
    alert("Mới vào nghề");
} else if (year_Input <= 3) {
    alert("Nhân viên có kinh nghiệm");
} else if (year_Input <= 6) {
    alert("Chuyên viên");
} else if (year_Input > 6) {
    alert("Quản lý");
}