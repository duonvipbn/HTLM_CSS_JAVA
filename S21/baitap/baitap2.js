let soLuongSoChan = 0;
let soLuongSoLe = 0;
for (let i = 0; i < 5; i++) {
    let input = +prompt(`input number ${i + 1}:`);
    if (input % 2 !== 0) {
        soLuongSoLe++;
    } else {
        soLuongSoChan++;
    }
}
alert(`So luong so chan = ${soLuongSoChan}`);
alert(`So luong so le = ${soLuongSoLe}`);