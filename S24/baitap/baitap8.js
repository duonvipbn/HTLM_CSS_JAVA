let choice;
let inputString = "";

do {
    choice = +prompt(`MENU\n1. Nhập chuỗi ký tự\n2. Hiển thị chuỗi ký tự\n3. Tìm tất cả các từ con trùng lặp trong chuỗi và số lần xuất hiện\n4. Tìm các từ có độ dài lớn nhất và nhỏ nhất trong chuỗi\n5. Tìm số lần xuất hiện nhiều nhất của các ký tự trong chuỗi\n6. Chuyển đổi chuỗi ký tự thành dạng snake_case\n7. Thoát chương trình\nLựa chọn của bạn:`);

    switch (choice) {
        case 1:
            inputString = prompt("Nhập chuỗi:");
            break;

        case 2:
            alert(`Chuỗi hiện tại: ${inputString}`);
            break;

        case 3:
            let words = inputString.split(" ");
            let wordCount = {};
            for (let word of words) {
                if (word) {
                    wordCount[word] = (wordCount[word] || 0) + 1;
                }
            }
            let wordCountString = "";
            for (let key in wordCount) {
                wordCountString += `${key}: ${wordCount[key]} lần\n`;
            }
            alert(`Các từ trùng lặp:\n${wordCountString}`);
            break;

        case 4:
            let wordArray = inputString.split(" ");
            let longest = wordArray[0];
            let shortest = wordArray[0];
            for (let word of wordArray) {
                if (word.length > longest.length) longest = word;
                if (word.length < shortest.length) shortest = word;
            }
            alert(`Từ dài nhất: ${longest}, Từ ngắn nhất: ${shortest}`);
            break;

        case 5:
            let charCount = {};
            for (let char of inputString) {
                if (char !== ' ') {
                    charCount[char] = (charCount[char] || 0) + 1;
                }
            }
            let maxChar = '';
            let maxCount = 0;
            for (let char in charCount) {
                if (charCount[char] > maxCount) {
                    maxChar = char;
                    maxCount = charCount[char];
                }
            }
            alert(`Ký tự xuất hiện nhiều nhất: ${maxChar}, số lần: ${maxCount}`);
            break;

        case 6:
            let snakeCaseString = inputString.toLowerCase().split(" ").join("_");
            alert(`Chuỗi dạng snake_case: ${snakeCaseString}`);
            break;

        case 7:
            alert("Thoát chương trình!");
            break;

        default:
            alert("Lựa chọn không hợp lệ!");
            break;
    }
} while (choice !== 7);
