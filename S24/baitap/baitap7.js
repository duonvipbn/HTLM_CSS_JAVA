let choice;
let inputString = "";

do {
    choice = +prompt(`MENU\n1. Nhập chuỗi\n2. Hiển thị chuỗi\n3. Loại bỏ khoảng trắng ở đầu và cuối\n4. Đảo ngược chuỗi\n5. Đếm số lượng từ trong chuỗi\n6. Tìm kiếm và thay thế ký tự\n7. Thoát\nLựa chọn của bạn:`);

    switch (choice) {
        case 1:
            inputString = prompt("Nhập chuỗi:");
            break;

        case 2:
            alert(`Chuỗi hiện tại: ${inputString}`);
            break;

        case 3:
            let start = 0;
            let end = inputString.length - 1;
            while (start <= end && inputString[start] === ' ') {
                start++;
            }
            while (end >= start && inputString[end] === ' ') {
                end--;
            }
            inputString = inputString.slice(start, end + 1);
            alert(`Chuỗi sau khi loại bỏ khoảng trắng: ${inputString}`);
            break;

        case 4:
            let reversedString = "";
            for (let i = inputString.length - 1; i >= 0; i--) {
                reversedString += inputString[i];
            }
            alert(`Chuỗi đảo ngược: ${reversedString}`);
            break;

        case 5:
            let count = 0;
            let inWord = false;
            for (let i = 0; i < inputString.length; i++) {
                if (inputString[i] !== ' ') {
                    if (!inWord) {
                        count++;
                        inWord = true;
                    }
                } else {
                    inWord = false;
                }
            }
            alert(`Số lượng từ trong chuỗi: ${count}`);
            break;

        case 6:
            let charToFind = prompt("Nhập ký tự cần tìm:");
            let found = false;
            for (let i = 0; i < inputString.length; i++) {
                if (inputString[i] === charToFind) {
                    found = true;
                    break;
                }
            }
            if (!found) {
                alert("Ký tự không tồn tại trong chuỗi");
                break;
            }
            let charToReplace = prompt("Nhập ký tự thay thế:");
            let replacedString = "";
            for (let i = 0; i < inputString.length; i++) {
                if (inputString[i] === charToFind) {
                    replacedString += charToReplace;
                } else {
                    replacedString += inputString[i];
                }
            }
            inputString = replacedString;
            alert(`Chuỗi sau khi thay thế: ${inputString}`);
            break;

        case 7:
            alert("Thoát chương trình!");
            break;

        default:
            alert("Lựa chọn không hợp lệ!");
            break;
    }
} while (choice !== 7);
