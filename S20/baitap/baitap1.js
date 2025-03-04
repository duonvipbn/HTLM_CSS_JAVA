let input = +prompt("Nhập môt só nguyên từ 1 - n:");
if (input >= 1) {
    let total = 0;
    for (let i = 1; i <= input; i++){
        total += i;
    }
    alert(total); 
} else {
    alert("Dữ liệu nhập vào không hợp lệ.");
}