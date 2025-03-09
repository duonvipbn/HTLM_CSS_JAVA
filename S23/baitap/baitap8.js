let n = +prompt("n:");
let array = [];

if (n < 0) {
    alert("Số lượng phần tử không được nhỏ hơn 0");
} else if (n === 0) {
    alert("Không phải dãy số fibonacci");
} else {
    for (let i = 0; i < n; i++) {
        let num = +prompt(`array[${i}]:`);
        array.push(num);
    }

    let isFibonacci = true;
    if (n >= 2 && (array[0] !== 0 || array[1] !== 1)) {
        isFibonacci = false;
    }
    if (isFibonacci) {
        for (let i = 2; i < array.length; i++) {
            if (array[i] !== array[i - 1] + array[i - 2]) {
                isFibonacci = false;
                break;
            }
        }
    }

    if (isFibonacci) {
        alert("Là dãy số fibonacci");
    } else {
        alert("Không phải dãy số fibonacci");
    }
}
