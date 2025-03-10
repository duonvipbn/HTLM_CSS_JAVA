let choice;
let n;
let array = [];
const maxN = 100;
do {
    choice = +prompt("MENU\n1. Nhập mảng số nguyên\n2. Hiển thị mảng\n3. Tìm phần tử lớn nhất trong mảng và in ra chỉ số của nó\n4. Tính tổng và trung bình cộng của các số dương trong mảng\n5. Đảo ngược mảng\n6. Kiểm tra mảng có đối xứng không\n7. Thoát chương trình\nLựa chọn của bạn:");
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
                for (let i = 0; i < n; i++) {
                    if (maxElement < array[i]) {
                        maxElement = array[i];
                    }
                }
                alert(`Phần tử lớn nhất: ${maxElement}`);
            } else {
                alert("n phải lớn hơn 0 và nhỏ hơn hoặc bằng " + maxN);
            }
            break;
        case 4:
            if (n > 0 && n <= maxN) {
                let sum = 0;
                let sumPositive = 0;
                let indexPositive = 0;
                for (let i = 0; i < n; i++) {
                    sum += array[i];
                    if (array[i] >= 0) {
                        sumPositive += array[i]; 
                        indexPositive++;
                    }
                }
                alert(`Tổng: ${sum}\nTrung bình cộng: ${sumPositive/indexPositive}`);
            } else {
                alert("n phải lớn hơn 0 và nhỏ hơn hoặc bằng " + maxN);
            }
            break;
        case 5:
            if (n > 0 && n <= maxN) {
                array.reverse()
                alert(`Đảo ngược mảng thành công!`);
            } else {
                alert("n phải lớn hơn 0 và nhỏ hơn hoặc bằng " + maxN);
            }
            break;
        case 6:
            if (n > 0 && n <= maxN) {
                let flag = true;
                for (let i = 0; i < Math.floor(n / 2); i++) {
                    if (array[i] !== array[n-i-1]) {
                        flag = false;
                        break;
                    }
                }
                if (flag == true) {
                    alert("Mảng đối xứng");
                } else {
                    alert("Mảng không đối xứng");
                }
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