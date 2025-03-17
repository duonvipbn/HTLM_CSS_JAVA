// Tạo một hệ thống quản lý sản phẩm với các chức năng CRUD.Mỗi sản phẩm có các thuộc tính:

// id: Định danh duy nhất.
// name: Tên sản phẩm.
// price: Giá sản phẩm.
//     category: Danh mục sản phẩm.
//   quantity: Số lượng sản phẩm trong kho.
 

// Các chức năng:

// Thêm sản phẩm vào danh sách sản phẩm.
// Hiển thị tất cả sản phẩm.
// Hiển thị chi tiết sản phẩm theo id.
// Cập nhật thông tin sản phẩm(name, price, category, quantity) theo id sản phẩm.
// Xóa sản phẩm theo id.
// Lọc sản phẩm theo khoảng giá.
//     Thoát.

let store = [];
let choice;
let idCount = 1;
function addItem() {
    let id = idCount;
    idCount++;
    let name = prompt("Nhap ten:");
    let price = prompt("Nhap gia:");
    let category = prompt("Nhap danh muc:");
    let quantity = prompt("Nhap so luong:");
    store.push({id: id, name: name, price: price, category: category, quantity: quantity});
}
function showItems() {
    if (store.length >= 1) {
        let message = "Danh sach san pham:\n";
        for (let i = 0; i < store.length; i++){
            message += `ID: ${store[i].id}, Name: ${store[i].name}, Price: ${store[i].price}, Catepory: ${store[i].category}, Quantity: ${store[i].quantity}\n`;
        }
        alert(message);
    } else {
        alert("Mang rong");
    }
}
function showDetailItem() {
    if (store.length >= 1) {
        let input = +prompt("Nhap id can xem chi tiet:");
        let flag = -1;
        for (let i = 0; i < store.length; i++) {
            if (store[i].id === input) {
                flag = i;
                break;
            }
        }
        if (flag !== -1) {
            alert(`Name: ${store[flag].name}, Price: ${store[flag].price}, Catepory: ${store[flag].category}, Quantity: ${store[flag].quantity}\n`);
        } else {
            alert("Khong tim thay vat pham");
        }
    } else {
        alert("Mang rong");
    }
}

function updateItem() {
    if (store.length >= 1) {
        let input = +prompt("Nhap id can can cap nhap:");
        let flag = -1;
        for (let i = 0; i < store.length; i++) {
            if (store[i].id === input) {
                flag = i;
                break;
            }
        }
        if (flag !== -1) {
            store[flag].name = prompt("Nhap ten moi:");
            store[flag].price = prompt("Nhap gia moi:");
            store[flag].category = prompt("Nhap danh muc moi:");
            store[flag].quantity = prompt("Nhap so luong moi:");
            alert("Cap nhap thanh cong");
        } else {
            alert("Khong tim thay vat pham");
        }
    } else {
        alert("Mang rong");
    }
}
function replaceItem() {
    if (store.length >= 1) {
        let input = +prompt("Nhap id can xoa:");
        let flag = -1;
        for (let i = 0; i < store.length; i++) {
            if (store[i].id === input) {
                flag = i;
                break;
            }
        }
        if (flag !== -1) {
            store.splice(flag, 1);
            alert("Xoa thanh cong");
        } else {
            alert("Khong tim thay vat pham");
        }
    } else {
        alert("Mang rong");
    }
}
function sortItemsByPrice() {
    if (store.length >= 1) {
        alert("Nhap mot khoang gia vd(gia1: 1000 - gia2:2000)gia1 luon luon nho hon hoac bang gia2.");
        let gia1 = +prompt("gia1:");
        let gia2 = +prompt("gia2:");
        if (gia1 <= gia2) {
            let message = `Danh sach nhung vat pham co gia trong khoang ${gia1} - ${gia2}:\n`;
            for (let i = 0; i < store.length; i++){
                if (store[i].price >= gia1 && store[i].price <= gia2) {
                    message += `ID: ${store[i].id}, Name: ${store[i].name}, Price: ${store[i].price}, Catepory: ${store[i].category}, Quantity: ${store[i].quantity}\n`;
                }
            }
            alert(message);
        } else {
            alert("Sai dieu kien");
        }
    } else {
        alert("Mang rong");
    }
}
do {
    choice = +prompt("MENU\n1. Thêm sản phẩm vào danh sách sản phẩm.\n2. Hiển thị tất cả sản phẩm.\n3. Hiển thị chi tiết sản phẩm theo id.\n4. Cập nhật thông tin sản phẩm(name, price, category, quantity) theo id sản phẩm.\n5. Xóa sản phẩm theo id.\n6. Lọc sản phẩm theo khoảng giá.\n7. Thoát.");
    switch (choice) {
        case 1:// Thêm sản phẩm vào danh sách sản phẩm.
            addItem();
            break;
        case 2:// Hiển thị tất cả sản phẩm.
            showItems();
            break;
        case 3:// Hiển thị chi tiết sản phẩm theo id.
            showDetailItem();
            break;
        case 4:// Cập nhật thông tin sản phẩm(name, price, category, quantity) theo id sản phẩm.
            updateItem();
            break;
        case 5:// Xóa sản phẩm theo id.
            replaceItem();
            break;
        case 6:// Lọc sản phẩm theo khoảng giá.
            sortItemsByPrice();
            break;
        case 7://GET OUT
            alert("Thoat");
            break;
        default:
            alert("Lua chon sai");
    }
} while (choice !== 7);