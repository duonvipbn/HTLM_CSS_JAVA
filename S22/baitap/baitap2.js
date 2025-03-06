let numbers = [2, 5, 7, 4, 1, 8, 6];
let find_element = +prompt("Nhập số cần tìm:");
if (find_element) {
    if (numbers.indexOf(find_element) !== -1) {
        console.log("Bingo");
    } else {
        console.log("Chúc bạn may mắn lần sau");
    }
}