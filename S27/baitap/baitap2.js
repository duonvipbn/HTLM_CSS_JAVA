// Xây dựng menu quản lý sinh viên, gồm các chức năng:

// 1Nhập danh sách sinh viên.
// Cho người dùng nhập số lượng số sinh viên, nhập lần lượt tên đầy đủ từng sinh viên.
// 2Hiển thị danh sách sinh viên.
// 3Tìm sinh viên theo tên.
// Cho người dùng nhập tên sinh viên cần tìm kiếm, hiển thị tên đầy đủ sinh viên nếu tìm thấy, trong trường hợp không tìm thấy sinh viên thông báo sinh viên không có trong danh sách.
// 4Xóa sinh viên khỏi danh sách.
// Cho người dùng nhập tên sinh viên cần xóa, trong trường hợp có nhiều sinh viên trùng tên thì xóa sinh viên đầu tiên.
//     5Thoát.

function addStudents() {
    for (let i = 0; i < n; i++){
        let nameStudent = prompt(`Nhap ten sinh vien ${i + 1}`);

        if (nameStudent) {
            studentArr[i] = nameStudent;
        }
    }
}
function showStudents() {
    let message = "";
    for (let i = 0; i < n; i++){
        message += `Sinh vien ${i+1} ten: ${studentArr[i]}\n`;
    }
    alert(message);
}
function findStudent() {
    let inputFindStudent = prompt("Nhap ten sinh vien can tim:");
    for (let i = 0; i < n; i++){
        if (inputFindStudent === studentArr[i]) {
            alert(`Tim thay sinh vien ${i+1} ten: ${studentArr[i]}`);
            return;
        }
    }
    alert("Khong tim thay sinh vien");
}
function deleteStudent() {
    let inputDeleteStudent = prompt("Nhap ten sinh vien can xoa:");
    for (let i = 0; i < n; i++){
        if (inputDeleteStudent === studentArr[i]) {
            studentArr.splice(i, 1);
            n--;
            alert("Xoa thanh cong");
            return;
        }
    }
    alert("Khong tim thay sinh vien");
}
let studentArr = [];
let choice;
let n;
do {
    choice = +prompt("Menu\n1.Nhập danh sách sinh viên.\n2.Hiển thị danh sách sinh viên.\n3.Tìm sinh viên theo tên.\n4.Xóa sinh viên khỏi danh sách.\n5.Thoat\nLua chon cua ban:");
    switch (choice) {
        case 1://1.Nhập danh sách sinh viên.
            n = +prompt("Nhap so luong sinh vien:");
            if (n && n > 0) {
                addStudents();
            } else {
                alert("Sai input");
            }
            break;
        case 2:
            if (Number.isInteger(n) && n > 0) {
                showStudents();
            } else {
                alert("Mang rong");
            }
            break;
        case 3:
            if (Number.isInteger(n) && n > 0) {
                findStudent();
            } else {
                alert("Mang rong");
            }
            break;
        case 4:
            if (Number.isInteger(n) && n > 0) {
                deleteStudent();
            } else {
                alert("Mang rong");
            }
            break;
        case 5:
            alert("Thoat");
            break;
        default:
            alert("Lua chon sai");
            break;
    }
} while (choice !== 5);