let day = +prompt("ngày:");
let month = +prompt("tháng:");

if (day && month && (day >= 1) && (day <= 31) && (month >= 1) && (month <= 12)) {
    let zodiac = "";
    switch (month) {
        case 1:
            zodiac = day <= 19 ? "Ma Kết" : "Bảo Bình";
            break;
        case 2:
            zodiac = day <= 18 ? "Bảo Bình" : "Song Ngư";
            break;
        case 3:
            zodiac = day <= 20 ? "Song Ngư" : "Bạch Dương";
            break;
        case 4:
            zodiac = day <= 19 ? "Bạch Dương" : "Kim Ngưu";
            break;
        case 5:
            zodiac = day <= 20 ? "Kim Ngưu" : "Song Tử";
            break;
        case 6:
            zodiac = day <= 20 ? "Song Tử" : "Cự Giải";
            break;
        case 7:
            zodiac = day <= 22 ? "Cự Giải" : "Sư Tử";
            break;
        case 8:
            zodiac = day <= 22 ? "Sư Tử" : "Xử Nữ";
            break;
        case 9:
            zodiac = day <= 22 ? "Xử Nữ" : "Thiên Bình";
            break;
        case 10:
            zodiac = day <= 22 ? "Thiên Bình" : "Bọ Cạp";
            break;
        case 11:
            zodiac = day <= 21 ? "Bọ Cạp" : "Nhân Mã";
            break;
        case 12:
            zodiac = day <= 21 ? "Nhân Mã" : "Ma Kết";
            break;
        default:
            break;
    }
    alert("Cung hoàng đạo là: " + zodiac);
} else {
    alert("Sai input");
}