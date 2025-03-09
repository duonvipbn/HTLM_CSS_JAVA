let array = [];
let choice;
do {
    choice = +prompt(`================== MENU ===================\n\n1. Nhập số phần tử cần nhập và giá trị các phần tử\n2. In ra giá trị các phần tử đang quản lý\n3. In ra các phần tử chẵn, tính tổng và sắp xếp giảm dần\n4. In ra giá trị lớn nhất, nhỏ nhất và vị trí của chúng\n5. In ra các số nguyên tố trong mảng và tính tổng\n6. Nhập một số và đếm số lần xuất hiện trong mảng\n7. Thêm một phần tử vào vị trí chỉ định\n8. Xóa một phần tử theo giá trị\n9. Sắp xếp mảng theo thứ tự tăng dần hoặc giảm dần\n0. Thoát\n\n============================================\n\nLựa chọn của bạn:`);

    switch (choice) {
        case 1:
            let n = +prompt("Nhập số phần tử của mảng:");
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
            for (let i = 0; i < evenNumbers.length - 1; i++) {
                for (let j = 0; j < evenNumbers.length - i - 1; j++) {
                    if (evenNumbers[j] < evenNumbers[j + 1]) {
                        let temp = evenNumbers[j];
                        evenNumbers[j] = evenNumbers[j + 1];
                        evenNumbers[j + 1] = temp;
                    }
                }
            }
            alert(`Các số chẵn (giảm dần): ${evenNumbers.join(", ")}\nTổng: ${evenSum}`);
            break;

        case 4:
            let max = array[0];
            let min = array[0];
            let maxIndex = 0;
            let minIndex = 0;
            for (let i = 1; i < array.length; i++) {
                if (array[i] > max) {
                    max = array[i];
                    maxIndex = i;
                }
                if (array[i] < min) {
                    min = array[i];
                    minIndex = i;
                }
            }
            alert(`Số lớn nhất: ${max}, vị trí: ${maxIndex}\nSố nhỏ nhất: ${min}, vị trí: ${minIndex}`);
            break;

        case 5:
            let primes = [];
            let primeSum = 0;
            for (let num of array) {
                let isPrime = num > 1;
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
                array.splice(position, 0, value);
                alert("Mảng sau khi chèn: " + array.join(", "));
            } else {
                alert("Sai vị trí");
            }
            break;

        case 8:
            let deleteValue = +prompt("Nhập giá trị cần xóa: ");
            let newArr = [];
            for (let i = 0; i < array.length; i++) {
                if (array[i] !== deleteValue) {
                    newArr.push(array[i]);
                }
            }
            array = newArr;
            break;

        case 9:
            let order = +prompt("Nhập 1 tăng dần/ 2 giảm dần: ");
            if (order === 1) {
                for (let i = 0; i < array.length - 1; i++) {
                    for (let j = 0; j < array.length - i - 1; j++) {
                        if (array[j] > array[j + 1]) {
                            let temp = array[j];
                            array[j] = array[j + 1];
                            array[j + 1] = temp;
                        }
                    }
                }
            } else if (order === 2) {
                for (let i = 0; i < array.length - 1; i++) {
                    for (let j = 0; j < array.length - i - 1; j++) {
                        if (array[j] < array[j + 1]) {
                            let temp = array[j];
                            array[j] = array[j + 1];
                            array[j + 1] = temp;
                        }
                    }
                }
            } else {
                alert("Lựa chọn sai");
            }
            break;

        case 0:
            alert("Thoát");
            break;

        default:
            alert("Lựa chọn sai");
    }
} while (choice !== 0);
