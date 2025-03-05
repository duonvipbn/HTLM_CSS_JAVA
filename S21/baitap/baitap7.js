let tienBanDau = +prompt("Tiền ban đầu:");
let laiSuat = +prompt("Lãi suất:");
let soThangGui = +prompt("Số tháng gửi:");

if (tienBanDau > 0 && laiSuat > 0 && soThangGui > 0) {
    let tienNhanDuoc = tienBanDau * Math.pow(1 + laiSuat / 100, soThangGui);
    let tienLai = tienNhanDuoc - tienBanDau;
    console.log(`Tiền lãi: ${tienLai.toFixed(3)}`);
    console.log(`Tiền nhận được: ${tienNhanDuoc.toFixed(3)}`);
}
