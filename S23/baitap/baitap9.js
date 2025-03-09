let array = [];
let choice;
do {
    choice = +prompt(`================== MENU ===================\n\n1. Nhập số phần tử cần nhập và giá trị các phần tử\n2. In ra giá trị các phần tử đang quản lý\n3. In ra giá trị các phần tử chẵn và tính tổng\n4. In ra giá trị lớn nhất và nhỏ nhất trong mảng\n5. In ra các phần tử là số nguyên tố trong mảng và tính tổng\n6. Nhập vào một số và thống kê trong mảng có bao nhiêu phần tử đó\n7. Thêm một phần tử vào vị trí chỉ định\n8. Thoát\n\n============================================\n\nLựa chọn của bạn:`);

    switch (choice) {
        case 1:
            let n = +prompt("n:");
            array = [];
            for (let i = 0; i < n; i++) {
                array.push(+prompt(`array[${i}]:`));
            }
            break;

        case 2:
            alert(array.join(", "));
            break;

        case 3:
            let evenNumbers = [];
            let evenSum = 0;
            for (let i = 0; i < array.length; i++) {
                if (array[i] % 2 === 0) {
                    evenNumbers.push(array[i]);
                    evenSum += array[i];
                }
            }
            alert(`Các số chẵn: ${evenNumbers.join(", ")}\nTổng: ${evenSum}`);
            break;

        case 4:
            let max = array[0];
            let min = array[0];
            for (let i = 1; i < array.length; i++) {
                if (array[i] > max) {
                    max = array[i];
                }
                if (array[i] < min) {
                    min = array[i];
                }
            }
            alert(`Số lớn nhất: ${max}\nSố nhỏ nhất: ${min}`);
            break;

        case 5:
            let primes = [];
            let primeSum = 0;
            for (let i = 0; i < array.length; i++) {
                let num = array[i];
                if (num > 1) {
                    let isPrime = true;
                    for (let j = 2; j * j <= num; j++) {
                        if (num % j === 0) {
                            isPrime = false;
                            break;
                        }
                    }
                    if (isPrime) {
                        primes.push(num);
                        primeSum += num;
                    }
                }
            }
            alert(`Các số nguyên tố: ${primes.join(", ")}\nTổng: ${primeSum}`);
            break;

        case 6:
            let searchNumber = +prompt("Nhập số cần tìm: ");
            let count = 0;
            for (let i = 0; i < array.length; i++) {
                if (array[i] === searchNumber) {
                    count++;  
                }
            }
            alert(`Số lần xuất hiện của ${searchNumber}: ${count}`);
            break;

        case 7:
            let value = +prompt("Nhập giá trị cần thêm: ");
            let position = +prompt("Nhập vị trí cần chèn: ");
            if (position >= 0 && position <= array.length) {
                let newArray = [];
                for (let i = 0; i < array.length; i++) {
                    if (i === position) {
                        newArray.push(value);
                    }
                    newArray.push(array[i]);
                }
                if (position === array.length) {
                    newArray.push(value);
                }
                array = newArray;
            } else {
                alert("Sai vị trí");
            }
            break;

        case 8:
            alert("Thoát");
            break;

        default:
            alert("Lựa chọn sai");
    }
} while (choice !== 8);
