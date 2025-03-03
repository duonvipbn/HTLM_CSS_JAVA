let month = +prompt("Nhập tháng (1-12):");

if (isNaN(month) || month < 1 || month > 12) {
    alert("tháng không hợp lệ");
} else {
    let season;
    if (month >= 1 && month <= 3) {
        season = "Mùa xuân";
    } else if (month >= 4 && month <= 6) {
        season = "Mùa hạ";
    } else if (month >= 7 && month <= 9) {
        season = "Mùa thu";
    } else {
        season = "Mùa đông";
    }
    alert(season);
}
