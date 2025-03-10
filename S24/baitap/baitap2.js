let choice;
let n;
let array = [];
const maxN = 100;
do {
    choice = +prompt("MENU\n1. Nhập mảng số nguyên\n2. Hiển thị mảng\n3. Tìm các phần tử chẵn và lẻ\n4. Tính trung bình cộng của mảng\n5. Xóa phần tử tại vị trí chỉ định\n6. Tìm phần tử lớn thứ hai trong mảng\n7. Thoát chương trình\nLựa chọn của bạn:");
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
                let evenElement = [];
                let oddElement = [];
                for (let i = 0; i < n; i++) {
                    if (array[i] % 2 === 0) {
                        evenElement.push(array[i]);
                    } else if (array[i] % 2 !== 0) {
                        oddElement.push(array[i]);
                    }
                }
                alert(`Các phần tử chẵn: ${evenElement}\nCác phần tử lẻ: ${oddElement}`);
            } else {
                alert("n phải lớn hơn 0 và nhỏ hơn hoặc bằng " + maxN);
            }
            break;
        case 4:
            if (n > 0 && n <= maxN) {
                let sum = 0;
                for (let i = 0; i < n; i++) {
                    sum += array[i];
                }
                alert(`Trung bình cộng của mảng: ${sum/n}`);
            } else {
                alert("n phải lớn hơn 0 và nhỏ hơn hoặc bằng " + maxN);
            }
            break;
        case 5:
            if (n > 0 && n <= maxN) {
                let findElement = +prompt("Nhập vị trí cần xóa phần tử:");
                if (findElement >= 0 && findElement < n) {
                    array.splice(findElement, 1);
                    n = array.length;
                } else {
                    alert("Vị trí không tồn tại");
                }
            } else {
                alert("n phải lớn hơn 0 và nhỏ hơn hoặc bằng " + maxN);
            }
            break;
        case 6:
            if (n > 0 && n <= maxN) {
                let max1 = -Infinity;
                let max2 = -Infinity;

                for (let i = 0; i < n; i++) {
                    if (array[i] > max1) {
                        max2 = max1;
                        max1 = array[i];
                    } else if (array[i] > max2 && array[i] !== max1) {
                        max2 = array[i];
                    }
                }
                alert("Phần tử lớn thư hai trong mảng là: " + max2);
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