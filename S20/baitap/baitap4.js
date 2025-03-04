let input_str = prompt("nhập vào một chuỗi bất kỳ:");
let input_char = prompt("Ký tự cần tìm kiếm:");
let length = input_str.length;
let check = 0;

// cách 1: dùng lệnh có sẵn

// if (input_str.indexOf(input_char) != -1) {
//     alert("Tồn tại từ cần tìm kiếm");
// } else {
//     alert("Không tồn tại từ cần tìm kiếm");
// }

// cách 2: dùng vòng lặp kiểm tra

for (let i = 0; i < length; i++) {
    if (input_str[i] == input_char) {
        check = 1;
        break;
    }
}
check == 1 ? alert("Tồn tại từ cần tìm kiếm") : alert("Không tồn tại từ cần tìm kiếm");