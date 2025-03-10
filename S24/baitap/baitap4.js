let choice;
let rows;
let cols;
let array = [[],[]];
do {
    choice = +prompt("MENU\n1. Nhập mảng 2 chiều\n2. Hiển thị mảng 2 chiều\n3. Tính tổng các phần tử trong mảng\n4. Tìm phần tử lớn nhất trong mảng và chỉ số của nó\n5. Tính trung bình cộng các phần tử của một hàng cụ thể\n6. Đảo ngược các hàng trong mảng\n7. Thoát chương trình\nLựa chọn của bạn:");
    switch (choice) {
        case 1:
            rows = +prompt("Nhập hàng:");
            cols = +prompt("Nhập cột:");
            if (rows > 0 && cols > 0) {
                for (let i = 0; i < rows; i++) {
                    for (let j = 0; j < cols; j++) {
                        array[i][j] = +prompt(`array[${i}][${j}]=`);
                    }
                }
            } else {
                alert("Cột, hàng phải lớn hơn 0");
            }
            break;
        case 2:
            if (rows > 0 && cols > 0) {
                alert(`array[${array}]`);
            } else {
                alert("Cột, hàng phải lớn hơn 0");
            }
            break;
        case 3:
            if (rows > 0 && cols > 0) {
                let sum = 0;
                for (let i = 0; i < rows; i++) {
                    for (let j = 0; j < cols; j++) {
                        sum += array[i][j];
                    }
                }
                alert(`Tổng = ${sum}`);
            } else {
                alert("Cột, hàng phải lớn hơn 0");
            }
            break;
        case 4:
            if (rows > 0 && cols > 0) {
                let highestElement = -Infinity;
                let iHighestElement = 0;
                let jHighestElement = 0;
                for (let i = 0; i < rows; i++) {
                    for (let j = 0; j < cols; j++) {
                        if (highestElement < array[i][j]) {
                            highestElement = array[i][j];
                            iHighestElement = i;
                            jHighestElement = j;
                        }
                    }
                }
                alert(`Phần tử lớn nhất trong mảng: array[${iHighestElement}][${jHighestElement}]=${highestElement}`);
            } else {
                alert("Cột, hàng phải lớn hơn 0");
            }
            break;
        case 5:
            if (rows > 0 && cols > 0) {
                let rowFind = +prompt("Nhập số hàng:");
                let sum = 0;
                if (rowFind > 0 && rowFind < rows) {
                    for (let i = 0; i < cols; i++) {
                        sum += array[rowFind][i];
                    }
                    alert(`Trung bình cộng của hàng ${rowFind} là ${sum / rows}`);
                } else {
                    alert("Sai cú pháp!");
                }
            } else {
                alert("Cột, hàng phải lớn hơn 0");
            }
            break;
        case 7:
            alert("Thoát chương trình!");
            break;
        default:
            alert("Sai cú pháp!");
            break;
    }
} while (choice !== 7);