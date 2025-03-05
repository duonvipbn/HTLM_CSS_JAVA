let num = +prompt("Nhập một số nguyên:");

console.log(`Các ước của ${num} là:`);
if (num) {
    for (let i = 1; i <= Math.abs(num); i++) {
        if (num % i === 0) {
            console.log(i);
        }
    }
}
