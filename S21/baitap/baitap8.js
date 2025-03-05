console.log("các số Armstrong có 3 chữ số");

for (let i = 100; i <= 999; i++) {
    let num = i;
    let sum = 0;
    let rem;
    while (num !== 0) {
        rem = num % 10;
        sum = sum + (rem * rem * rem);
        num = Math.floor(num / 10);
    }
    if (i == sum) {
        console.log(i);
    }
}
//153
// lap lan 1
// rem = 153 % 10 = 3;
// sum = 3 * 3 * 3 = 27;
// num = 15
// lap lan 2
// rem = 15 % 10 = 5;
// sum = 27 + 5 * 5 * 5 = 27 + 125 = 152;
// num = 1
// lap lan 3
// rem = 1 % 10 = 1;
// sum = 27 + 125 + 1 * 1 * 1 = 27 + 125 +1 = 153;
// num = 0
//=> 153 la so armstrong
