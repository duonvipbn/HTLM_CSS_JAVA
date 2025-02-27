let plrMoney = +prompt("input money:");
let plrMonth = +prompt("input month:");
let interestRate = 4.3 / 100;
let oneYear = 12;
let sum = Math.round(((plrMoney * interestRate) / oneYear) * plrMonth);
let formatNumber = sum.toLocaleString("vi-VN");
alert(`${formatNumber} VND`);