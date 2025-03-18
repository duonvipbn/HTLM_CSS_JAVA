let store = [];
let cart = [];
let choice;

function showBooksByCategory() {
    if (store.length >= 1) {
        let inputCategory = prompt("Nhap the loai sach:");
        let message = "";
        for (let i = 0; i < store.length; i++){
            if (inputCategory == "all") {
                message += `ID: ${store[i].id}, Name: ${store[i].name}, Price: ${store[i].price}, Quantity: ${store[i].quantity}, Category: ${store[i].category}\n`;
            } else if (store[i].category === inputCategory) {
                message += `ID: ${store[i].id}, Name: ${store[i].name}, Price: ${store[i].price}, Quantity: ${store[i].quantity}, Category: ${store[i].category}\n`;
            }
        }
        alert(message);
    } else {
        alert("Kho rong");
    }
}
function addBook() {
    let id = +prompt("Nhap id:");
    for (let i = 0; i < store.length; i++){
        if (store[i].id === id) {
            alert("ID da ton tai");
            return;
        }
    }
    let name = prompt("Nhap ten:");
    let price = +prompt("Nhap gia:");
    let quantity = +prompt("Nhap so luong:");
    let category = prompt("Nhap the loai:");
    if (id && name && price && quantity && category) {
        store.push({ id, name, price, quantity, category });
        alert("Them vao store thanh cong");
    } else {
        alert("Khong duoc de gia tri rong, space..");
    }
}

function findBookByNameOrID() {
    let choice = +prompt("tim kiem sach theo:\n1. id\n2. name");
    let input;
    if (choice === 1) { //id
        input = +prompt("Nhap id:"); 
    } else if (choice === 2) { //name
        input = prompt("Nhap ten:");
    }
    for (let i = 0; i < store.length; i++) {
        if (choice === 1 && input === store[i].id) {
            alert(`ID: ${store[i].id}, Name: ${store[i].name}, Price: ${store[i].price}, Quantity: ${store[i].quantity}, Category: ${store[i].category}\n`);
            return;
        } else if (choice === 2 && input === store[i].name) { 
            alert(`ID: ${store[i].id}, Name: ${store[i].name}, Price: ${store[i].price}, Quantity: ${store[i].quantity}, Category: ${store[i].category}\n`);
            return;
        }
    }
    alert("Khong tim thay sach");
}
function buyBook() {
    let idInput = +prompt("Nhap so id sach can mua:");
    if (!idInput) {
        alert("Sai du lieu nhap vao");
        return;
    }
    let flag = -1;
    for (let i = 0; i < store.length; i++){
        if (store[i].id === idInput) {
            flag = i;
            break;
        }
    }
    if (flag !== -1) {
        let quantityInput = +prompt("Nhập số lượng cần mua:");
        if (!quantityInput) {
            alert("Dữ liệu nhập vào phải là số nguyên");
            return;
        }
        if (quantityInput < 1) {
            alert("Số lượng cần mua phải lớn hơn hoặc bằng 1");
            return;
        }
        if (store[flag].quantity <= 0) {
            store[flag].quantity = 0;
            alert("Đã hết sản phẩm");
            return;
        }
        if (quantityInput > store[flag].quantity) {
            alert("Không đủ số lượng sản phẩm");
            return;
        }

        store[flag].quantity -= quantityInput;

        let flagRed = -1;
        for (let i = 0; i < cart.length; i++) {
            if (cart[i].id == store[flag].id) {
                flagRed = i;
                break;
            }
        }
        if (flagRed === -1) {
            cart.push({
                id: store[flag].id,
                name: store[flag].name,
                price: store[flag].price,
                quantity: quantityInput,
                category: store[flag].category,
            });
        } else {
            cart[flagRed].quantity += quantityInput;
        }
        alert("Đã mua thành công!");
    } else {
        alert("ID khong ton tai");
    }
}
function sortStore() {
    let choice = +prompt("1.Tăng dần.\n2.Giảm dần.\n Lựa chọn của bạn:");
    if (choice === 1) {
        for (let i = 0; i < store.length - 1; i++) {
            for (let j = 0; j < store.length - 1 - i; j++) {
                if (store[j].price > store[j + 1].price) {
                    let temp = store[j];
                    store[j] = store[j + 1];
                    store[j + 1] = temp;
                }
            }
        }
    } else if (choice === 2) {
        for (let i = 0; i < store.length - 1; i++) {
            for (let j = 0; j < store.length - 1 - i; j++) {
                if (store[j].price < store[j + 1].price) {
                    let temp = store[j];
                    store[j] = store[j + 1];
                    store[j + 1] = temp;
                }
            }
        }
    } else {
        alert("Lựa chọn không hợp lệ");
        return;
    }
    let message = "";
    for (let i = 0; i < store.length; i++) {
        message += `ID: ${store[i].id}, Name: ${store[i].name}, Price: ${store[i].price}, Quantity: ${store[i].quantity}\n`;
    }
    alert(message);
}
function totalCart() {
    if (cart.length >= 1) {
        let total = 0;
        for (let i = 0; i < cart.length; i++) {
            total += cart[i].price * cart[i].quantity;
        }
        alert(`Tổng số tiền cần thanh toán trong giỏ hàng là: ${total} VND`);
    } else {
        alert("Rỏ hàng rỗng");
    }
}
function totalQuantityStore() {
    if (store.length >= 1) {
        let total = 0;
        for (let i = 0; i < store.length; i++) {
            total += store[i].quantity;
        }
        alert(`Tổng số sach trong store là: ${total} sach`);
    } else {
        alert("Store hàng rỗng");
    }
}
do {
    choice = +prompt("MENU\n1. Hiển thị danh sách sách theo thể loại\n2. Thêm sách mới vào kho\n3. Tìm kiếm sách theo tên hoặc id.\n4. Mua sách\n5. Sắp xếp sách theo giá.\n6. Tính tổng số lượng sách đã mua và in ra tổng tiền trong giỏ hàng\n7. Hiển thị tổng số lượng sách trong kho.\n8. Thoát chương trình.\nLựa chọn của bạn:");
    switch (choice) {
        case 1:
            showBooksByCategory();
            break;
        case 2:
            addBook();
            break;
        case 3:
            findBookByNameOrID();
            break;
        case 4:
            buyBook();
            break;
        case 5:
            sortStore();
            break;
        case 6:
            totalCart();
            break;
        case 7:
            totalQuantityStore();
            break;
        case 8:
            alert("Thoat chuong trinh");
            break;
        default:
            alert("Lua chon khong hop le");
    }
} while (choice !== 8);