let input = +prompt("Nhập số nguyên bất kỳ:");
let count = 0;
let num = 2;

if (input && input > 0) {
    while (count < input) {
        let laSoNguyenTo = true;

        for (let i = 2; i <= Math.sqrt(num); i++) {
            if (num % i === 0) {
                laSoNguyenTo = false;
                break;
            }
        }

        if (laSoNguyenTo) {
            count++;
            console.log(num);
        }

        num++;
    }
}
