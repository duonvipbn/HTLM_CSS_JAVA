let choice;
let inputString = "";

do {
    choice = +prompt(`MENU\n1. Nhập chuỗi ký tự\n2. Hiển thị chuỗi ký tự\n3. Đếm số lượng các ký tự là chữ và số trong chuỗi ký tự nhập vào\n4. Chuyển đổi các ký tự viết hoa → viết thường, viết thường → viết hoa trong chuỗi.\n5. Trộn lẫn các ký tự của chuỗi gốc với chuỗi thứ 2 người dùng nhập vào.\n6. Tách chuỗi thành các từ, sắp xếp chúng theo độ dài của từ, từ ngắn nhất đến dài nhất.\n7. Thoát chương trình\nLựa chọn của bạn:`);

    switch (choice) {
        case 1:
            inputString = prompt("Nhập chuỗi:");
            break;

        case 2:
            alert(`Chuỗi hiện tại: ${inputString}`);
            break;

        case 3:
            let letterCount = 0, numberCount = 0;
            for (let char of inputString) {
                if (char >= '0' && char <= '9') {
                    numberCount++;
                } else if ((char >= 'a' && char <= 'z') || (char >= 'A' && char <= 'Z')) {
                    letterCount++;
                }
            }
            alert(`Số lượng chữ cái: ${letterCount}, số lượng chữ số: ${numberCount}`);
            break;

        case 4:
            let toggledString = "";
            for (let char of inputString) {
                if (char >= 'a' && char <= 'z') {
                    toggledString += char.toUpperCase();
                } else if (char >= 'A' && char <= 'Z') {
                    toggledString += char.toLowerCase();
                } else {
                    toggledString += char;
                }
            }
            alert(`Chuỗi sau khi chuyển đổi: ${toggledString}`);
            break;

        case 5:
            let secondString = prompt("Nhập chuỗi thứ hai:");
            let mixedString = "";
            let length1 = inputString.length;
            let length2 = secondString.length;
            let maxLength = (length1 > length2) ? length1 : length2;
            for (let i = 0; i < maxLength; i++) {
                if (i < length1) {
                    mixedString += inputString[i];
                }
                if (i < length2) {
                    mixedString += secondString[i];
                }
            }
            alert(`Chuỗi sau khi trộn: ${mixedString}`);
            break;

        case 6:
            let wordsArray = [];
            let tempWord = "";
            for (let char of inputString + " ") {
                if (char !== " ") {
                    tempWord += char;
                } else if (tempWord.length > 0) {
                    wordsArray.push(tempWord);
                    tempWord = "";
                }
            }
            for (let i = 0; i < wordsArray.length - 1; i++) {
                for (let j = i + 1; j < wordsArray.length; j++) {
                    if (wordsArray[i].length > wordsArray[j].length) {
                        let temp = wordsArray[i];
                        wordsArray[i] = wordsArray[j];
                        wordsArray[j] = temp;
                    }
                }
            }
            alert(`Các từ sau khi sắp xếp: ${wordsArray.join(" ")}`);
            break;

        case 7:
            alert("Thoát chương trình!");
            break;

        default:
            alert("Lựa chọn không hợp lệ!");
            break;
    }
} while (choice !== 7);
