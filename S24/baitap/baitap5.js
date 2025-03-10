let choice;
let rows = 0, cols = 0;
let array = [];

do {
    choice = +prompt(`MENU\n1. Nhập mảng 2 chiều\n2. Hiển thị mảng 2 chiều\n3. Tính tổng các phần tử\n4. Tính tổng đường chéo chính\n5. Tính tổng đường chéo phụ\n6. Trung bình cộng (hàng/cột)\n7. Thoát\nLựa chọn của bạn:`);

    switch (choice) {
        case 1:
            rows = +prompt("Nhập số hàng:");
            cols = +prompt("Nhập số cột:");
            if (rows > 0 && cols > 0) {
                array = [];
                for (let i = 0; i < rows; i++) {
                    array[i] = [];
                    for (let j = 0; j < cols; j++) {
                        array[i][j] = +prompt(`array[${i}][${j}] =`);
                    }
                }
            } else {
                alert("Số hàng và số cột phải lớn hơn 0");
            }
            break;

        case 2:
            if (array.length > 0) {
                let result = "";
                for (let i = 0; i < rows; i++) {
                    result += array[i].join(" ") + "\n";
                }
                alert(result);
            } else {
                alert("Mảng chưa được nhập!");
            }
            break;
        case 3:
            let sum = 0;
            for (let i = 0; i < rows; i++) {
                for (let j = 0; j < cols; j++) {
                    sum += array[i][j];
                }
            }
            alert(`Tổng các phần tử: ${sum}`);
            break;
        case 4:
            if (rows === cols) {
                let mainDiagonalSum = 0;
                for (let i = 0; i < rows; i++) {
                    mainDiagonalSum += array[i][i];
                }
                alert(`Tổng đường chéo chính: ${mainDiagonalSum}`);
            } else {
                alert("Ma trận không vuông");
            }
            break;

        case 5:
            if (rows === cols) {
                let secondaryDiagonalSum = 0;
                for (let i = 0; i < rows; i++) {
                    secondaryDiagonalSum += array[i][cols - 1 - i];
                }
                alert(`Tổng đường chéo phụ: ${secondaryDiagonalSum}`);
            } else {
                alert("Ma trận không vuông");
            }
            break;

        case 6:
            let type = prompt("Nhập row col:");
            if (type === "row") {
                let rowIndex = +prompt("Nhập số hàng:");
                if (rowIndex >= 0 && rowIndex < rows) {
                    let sumRow = 0;
                    for (let j = 0; j < cols; j++) {
                        sumRow += array[rowIndex][j];
                    }
                    alert(`Trung bình cộng của hàng ${rowIndex}: ${sumRow / cols}`);
                } else {
                    alert("Số hàng không hợp lệ!");
                }
            } else if (type === "col") {
                let colIndex = +prompt("Nhập số cột:");
                if (colIndex >= 0 && colIndex < cols) {
                    let sumCol = 0;
                    for (let i = 0; i < rows; i++) {
                        sumCol += array[i][colIndex];
                    }
                    alert(`Trung bình cộng của cột ${colIndex}: ${sumCol / rows}`);
                } else {
                    alert("Số cột không hợp lệ!");
                }
            } else {
                alert("Lựa chọn không hợp lệ!");
            }
            break;

        case 7:
            alert("Thoát chương trình!");
            break;

        default:
            alert("Lựa chọn không hợp lệ!");
            break;
    }
} while (choice !== 7);