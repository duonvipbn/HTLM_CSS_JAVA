let choice;
let inputString = "";

do {
    choice = +prompt(`MENU\n1. Nhập chuỗi\n2. Hiển thị chuỗi\n3. Tính độ dài của chuỗi\n4. Đếm số lần xuất hiện của một ký tự\n5. Kiểm tra chuỗi đối xứng\n6. Chuyển đổi chuỗi thành chữ in hoa ký tự đầu tiên của từ\n7. Thoát\nLựa chọn của bạn:`);

    switch (choice) {
        case 1:
            inputString = prompt("Nhập chuỗi:");
            break;

        case 2:
            alert(`Chuỗi hiện tại: ${inputString}`);
            break;

        case 3:
            alert(`Độ dài của chuỗi: ${inputString.length}`);
            break;

        case 4:
            let charToFind = prompt("Nhập ký tự cần đếm:");
            let count = 0;
            for (let char of inputString) {
                if (char === charToFind) {
                    count++;
                }
            }
            alert(`Số lần xuất hiện của '${charToFind}': ${count}`);
            break;

        case 5:
            let reversedString = "";
            for (let i = inputString.length - 1; i >= 0; i--) {
                reversedString += inputString[i];
            }
            alert(inputString === reversedString ? "Chuỗi là đối xứng" : "Chuỗi không đối xứng");
            break;

        case 6:
            let words = inputString.split(" ");
            for (let i = 0; i < words.length; i++) {
                if (words[i].length > 0) {
                    words[i] = words[i][0].toUpperCase() + words[i].slice(1);
                }
            }
            inputString = words.join(" ");
            alert(`Chuỗi sau khi chuyển đổi: ${inputString}`);
            break;

        case 7:
            alert("Thoát chương trình!");
            break;

        default:
            alert("Lựa chọn không hợp lệ!");
            break;
    }
} while (choice !== 7);
