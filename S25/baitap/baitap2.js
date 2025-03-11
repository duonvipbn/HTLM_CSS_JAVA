function total(a, b) {
    if (!isNaN(a) && !isNaN(b)) {
        return a + b;
    } else {
        return "dữ liệu không hợp lệ";
    }
}

alert(total(2, 4));
