let n = +prompt("n:");

if (n && n > 0) {
    let numbers = [];
    for (let i = 0; i < n; i++) {
        let num = +prompt(`numbers[${i}]:`);
        numbers.push(num);
    }
    
    let count = 0;
    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] < 0) {
            count++;
        }
    }
    
    // Hiển thị kết quả
    if (numbers.length === 0 || count === 0) {
        alert("Mảng không có phần tử");
    } else {
        alert(count);
    }
} else {
    alert("Số lượng phần tử không hợp lệ");
}
