let numbers = [2, 5, 7, 4, 1, 8, 6, 2, 5, 7];
let find_element = +prompt("Nhập số cần tìm:");
if (find_element) {
    let count = 0;
    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] === find_element) {
            count++;
        }
    }
    alert(`Số ${find_element} xuất hiện ${count} lần trong mảng`);
} else {
    alert(`Số ${find_element} không tồn tại trong mảng`);
}