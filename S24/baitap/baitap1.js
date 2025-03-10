let choice;
let n;
let array = [];
const maxN = 100;
do {
    choice = +prompt("MENU\n1. Nhập mảng\n2. Hiển thị mảng\n3. Tìm phần tử lớn nhất và nhỏ nhất trong mảng\n4. Tính tổng các phần tử trong mảng\n5. Tìm số lần xuất hiện của một phần tử trong mảng\n6. Sắp xếp mảng tăng dần\n7. Thoát chương trình\nLựa chọn của bạn:");
    switch (choice) {
        case 1:
            n = +prompt("Nhập n:");
            if (n > 0 && n <= maxN) {
                for (let i = 0; i < n; i++) {
                    array[i] = +prompt(`array[${i}]:`);
                }
            } else {
                alert("n phải lớn hơn 0 và nhỏ hơn hoặc bằng " + maxN);
            }
            break;
        case 2:
            if (n > 0 && n <= maxN) {
                alert(`array[${array}]`);
            } else {
                alert("n phải lớn hơn 0 và nhỏ hơn hoặc bằng " + maxN);
            }
            break;
        case 3:
            if (n > 0 && n <= maxN) {
                let maxElement = -Infinity;
                let minElement = Infinity;
                for (let i = 0; i < n; i++) {
                    if (maxElement < array[i]) {
                        maxElement = array[i];
                    }
                    if (minElement > array[i]) {
                        minElement = array[i];
                    }
                }
                alert(`Phần tử lớn nhất: ${maxElement}\nPhần tử nhỏ nhất: ${minElement}`);
            } else {
                alert("n phải lớn hơn 0 và nhỏ hơn hoặc bằng " + maxN);
            }
            break;
        case 4:
            if (n > 0 && n <= maxN) {
                let sum = 0;
                for (let i = 0; i < n; i++){
                    sum += array[i];
                }
                alert(`Tổng: ${sum}`);
            } else {
                alert("n phải lớn hơn 0 và nhỏ hơn hoặc bằng " + maxN);
            }
            break;
        case 5:
            if (n > 0 && n <= maxN) {
                let findElement = +prompt("Nhập số phần tử cần tìm:");
                let loopsElement = 0;
                for (let i = 0; i < n; i++) {
                    if (findElement === array[i]) {
                        loopsElement++;
                    }
                }
                alert(`Phần tử ${findElement} xuất hiện ${loopsElement}`);
            } else {
                alert("n phải lớn hơn 0 và nhỏ hơn hoặc bằng " + maxN);
            }
            break;
        case 6:
            if (n > 0 && n <= maxN) {
                for (let i = 0; i < n - 1; i++){
                    for (let j = 0; j < n - i - 1; j++){
                        if (array[j] > array[j + 1]) {
                            let temp = array[j];
                            array[j] = array[j + 1];
                            array[j + 1] = temp;
                        }
                    }
                }
                alert("Sắp xếp thành công!");
            } else {
                alert("n phải lớn hơn 0 và nhỏ hơn hoặc bằng " + maxN);
            }
            break;
        case 7:
            alert("Thoát chương trình!");
            break;
        default:
            alert("Sai cú pháp");
            break;
    }
} while (choice !== 7);