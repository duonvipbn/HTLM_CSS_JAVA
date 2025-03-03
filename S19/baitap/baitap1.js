let input = +prompt("nhap so thang:");
let day;
switch (input) {
    case 1: case 3: case 5: case 7: case 8: case 10: case 12:
        day = "31 ngày";
        break;
    case 4: case 6: case 9: case 11:
        day = "30 ngày";
        break;
    case 2:
        day = "28 hoặc 29 ngày năm nhuận";
        break;
    default:
        day = "Tháng không hợp lệ";
}
alert(`tháng ${input} có ${day}`);