// Tạo một hệ thống quản lý menu cho nhà hàng trong đó:

// Mỗi danh mục sẽ có một số món ăn.
// Mỗi món ăn trong danh mục sẽ có thông tin: tên món ăn, giá và mô tả.
// Các chức năng:

// Thêm món ăn vào danh mục.
// Xóa món ăn theo tên khỏi danh mục.
// Cập nhật thông tin theo tên của món ăn(tên, giá, mô tả).
// Hiển thị toàn bộ menu gồm từng danh mục và từng món ăn.
// Tìm kiếm món ăn theo tên trong toàn bộ menu.
//     Thoát

let menu = [];
let choice;

function addItem() {
    let name = prompt("Nhap ten:");
    let price = prompt("Nhap gia:");
    let describe = prompt("Nhap mo ta:");
    menu.push({ name, price, describe });
}
function removeItem() {
    if (menu.length >= 1) {
        let flag = -1;
        let input = prompt("Nhap ten can xoa:");
        for (let i = 0; i < menu.length; i++){
            if (menu[i].name == input) {
                flag = i;
                break;
            }
        }
        if (flag !== -1) {
            menu.splice(flag, 1);
            alert("Xoa thanh cong");
        } else {
            alert("Khong tim thay ten trong menu");
        }
    } else {
        alert("mang rong");
    }
}
function updateItem() {
    if (menu.length >= 1) {
        let flag = -1;
        let input = prompt("Nhap ten can cap nhap:");
        for (let i = 0; i < menu.length; i++) {
            if (menu[i].name == input) {
                flag = i;
                break;
            }
        }
        if (flag !== -1) {
            menu[flag].name = prompt("Nhap ten moi:");
            menu[flag].price = prompt("Nhap gia moi:");
            menu[flag].describe = prompt("Nhap mo ta moi:");
            alert("Cap nhap thanh cong");
        } else {
            alert("Khong tim thay ten trong menu");
        }
    } else {
        alert("mang rong");
    }
}
function showItems() {
    if (menu.length >= 1) {
        let message = "MENU:\n";
        for (let i = 0; i < menu.length; i++){
            message += `ten: ${menu[i].name}, gia: ${menu[i].price}, mo ta: ${menu[i].describe}\n`;
        }
        alert(message);
    } else {
        alert("mang rong");
    }
}
function findItem() {
    if (menu.length >= 1) {
        let flag = -1;
        let input = prompt("Nhap ten can tim:");
        for (let i = 0; i < menu.length; i++) {
            if (menu[i].name == input) {
                flag = i;
                break;
            }
        }
        if (flag !== -1) {
            alert(`gia: ${menu[flag].price}, mo ta: ${menu[flag].describe}\n`);
        } else {
            alert("Khong tim thay ten trong menu");
        }
    } else {
        alert("mang rong");
    }
}
do {
    choice = +prompt("MENU\n1. Thêm món ăn vào danh mục.\n2. Xóa món ăn theo tên khỏi danh mục.\n3. Cập nhật thông tin theo tên của món ăn(tên, giá, mô tả).\n4. Hiển thị toàn bộ menu gồm từng danh mục và từng món ăn.\n5. Tìm kiếm món ăn theo tên trong toàn bộ menu.\n6. Thoát\nLua chon cua ban:");
    switch (choice) {
        case 1:// Thêm món ăn vào danh mục. tên món ăn, giá và mô tả.
            addItem();
            break;
        case 2:// Xóa món ăn theo tên khỏi danh mục.
            removeItem();
            break;
        case 3:// Cập nhật thông tin theo tên của món ăn(tên, giá, mô tả).
            updateItem();
            break;
        case 4:// Hiển thị toàn bộ menu gồm từng danh mục và từng món ăn.
            showItems();
            break;
        case 5:// Tìm kiếm món ăn theo tên trong toàn bộ menu.
            findItem();
            break;
        case 6:
            alert("Thoat");
            break;
        default:
            alert("Lua chon sai");
    }
} while (choice !== 6);
