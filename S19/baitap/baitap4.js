let input = +prompt("nhập 1 số nguyên bất kỳ::");
if (input % 5 == 0 && input % 3 == 0) {
    alert(`${input} chia hết cho cả 3 và 5`);
} else {
    alert(`${input} không chia hết cho cả 3 và 5`);
}
