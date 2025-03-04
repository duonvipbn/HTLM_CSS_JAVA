let input = +prompt("Nhập n:");
if (input && input >= 2) {
    let fib = [1, 1];

    for (let i = 2; i < input; i++) {
        fib[i] = fib[i - 1] + fib[i - 2];
    }
    console.log(fib);
} else {
    alert("Không hợp lệ");
}