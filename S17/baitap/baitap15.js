let r = prompt("Nhap ban kinh:");

let tTHC = (4 / 3) * Math.PI * r * r * r;
document.write("<br>thể tích hình cầu: " + tTHC.toFixed(2));

let dTBM = 4 * Math.PI * Math.pow(r, 2);
document.write("<br>Diện tích bề mặt: " + dTBM.toFixed(2));

let cVLN = 2 * Math.PI * r;
document.write("<br>Chu vi lớn nhất của hình cầu: " + cVLN.toFixed(2));