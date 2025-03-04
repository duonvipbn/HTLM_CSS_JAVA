let n = +prompt("Nhap so nguyen to:");

if (n && n > 0) {
    let primes = new Array(n);
    let num = 2;
    let count = 0;

    while (count < n) {
        let isPrime = true;
        let divisor = 2;

        while (divisor * divisor <= num) {
            if (num % divisor === 0) {
                isPrime = false;
                break;
            }
            divisor++;
        }

        if (isPrime) {
            primes[count] = num;
            count++;
        }

        num++;
    }

    for (let i = 0; i < primes.length; i++) {
        console.log(primes[i]);
    }
} else {
    alert("Không hợp lệ");
}
