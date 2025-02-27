let h = prompt("Nhap chieu cao:");
let r = prompt("Nhap ban kinh:");

let dTXQ = 2 * Math.PI * h * r;
document.write(" diện tích xung quanh: " + dTXQ.toFixed(2));

let dK = Math.PI * r * r;
let dTTP = 2 * dK + dTXQ;
document.write("<br>diện tích toàn phần: " + dTTP.toFixed(2));

let tTHC = dK * h;
document.write("<br>thể tích hình trụ: " + tTHC.toFixed(2));

let bK = 2 * Math.PI * r;
document.write("<br> chu vi đáy: " + bK.toFixed(2));