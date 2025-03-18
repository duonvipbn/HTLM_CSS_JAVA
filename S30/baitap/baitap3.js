let cart = [];
let store = [];
let choice;
function showPhoneByBrand(){
    if (store.length >= 1) {
        let inputBrand = prompt("Nhap hang:");
        let message = "";
        for (let i = 0; i < store.length; i++) {
            if (inputBrand == "all") {
                message += `ID: ${store[i].id}, Name: ${store[i].name}, Price: ${store[i].price}, Quantity: ${store[i].quantity}, Company: ${store[i].company}\n`;
            } else if (store[i].company === inputBrand) {
                message += `ID: ${store[i].id}, Name: ${store[i].name}, Price: ${store[i].price}, Quantity: ${store[i].quantity}, Company: ${store[i].company}\n`;
            }
        }
        alert(message);
    } else {
        alert("Kho rong");
    }
}
function addPhoneInStore() {
    let id = +prompt("Nhap id:");
    for (let i = 0; i < store.length; i++) {
        if (store[i].id === id) {
            alert("ID da ton tai");
            return;
        }
    }
    let name = prompt("Nhap ten:");
    let price = +prompt("Nhap gia:");
    let quantity = +prompt("Nhap so luong:");
    let company = prompt("Nhap ten hang:");
    if (id && name && price && quantity && company) {
        store.push({ id, name, price, quantity, company });
        alert("Them vao store thanh cong");
    } else {
        alert("Khong duoc de gia tri rong, space..");
    }
}

function findPhoneByNameOrID() {
    let choice = +prompt("tim kiem sach theo:\n1. id\n2. name");
    let input;
    if (choice === 1) { //id
        input = +prompt("Nhap id:");
    } else if (choice === 2) { //name
        input = prompt("Nhap ten:");
    }
    for (let i = 0; i < store.length; i++) {
        if (choice === 1 && input === store[i].id) {
            alert(`ID: ${store[i].id}, Name: ${store[i].name}, Price: ${store[i].price}, Quantity: ${store[i].quantity}, Company: ${store[i].company}\n`);
            return;
        } else if (choice === 2 && input === store[i].name) {
            alert(`ID: ${store[i].id}, Name: ${store[i].name}, Price: ${store[i].price}, Quantity: ${store[i].quantity}, Company: ${store[i].company}\n`);
            return;
        }
    }
    alert("Khong tim thay sach");
}
function buyPhone() {
    let idInput = +prompt("Nhap so id dien thoai can mua:");
    if (!idInput) {
        alert("Sai du lieu nhap vao");
        return;
    }
    let flag = -1;
    for (let i = 0; i < store.length; i++) {
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
                company: store[flag].company,
            });
        } else {
            cart[flagRed].quantity += quantityInput;
        }
        alert("Đã them vao gio hang thành công!");
    } else {
        alert("ID khong ton tai");
    }
}
function checkoutCart() {
    if (cart.length >= 1) {
        cart = [];
        alert("Thanh toan thanh cong!!");
    } else {
        alert("hien tai khong co san pham nao trong ro hang");
    }
}
function sortIphoneByPrice() {
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
        message += `ID: ${store[i].id}, Name: ${store[i].name}, Price: ${store[i].price}, Quantity: ${store[i].quantity}, Company: ${store[i].company}\n`;
    }
    alert(message);
}
function totalPhoneByBrand() {
    if (store.length >= 1) {
        let brandCount = {};

        for (let i = 0; i < store.length; i++) {
            let brand = store[i].company;
            let quantity = store[i].quantity;

            if (brandCount[brand] !== undefined) {
                brandCount[brand] += quantity;
            } else {
                brandCount[brand] = quantity;
            }
        }

        let message = "";
        for (let brand in brandCount) {
            message += `${brand} - ${brandCount[brand]}\n`;
        }

        alert(message);
    } else {
        alert("Store hàng rỗng");
    }
}
function totalPriceByAllPriceFromStore() {
    if (store.length >= 1) {
        let totalPrice = 0;

        for (let i = 0; i < store.length; i++) {
            totalPrice += store[i].price * store[i].quantity;
        }

        alert(`Tổng giá trị của tất cả điện thoại trong kho: ${totalPrice} VND`);
    } else {
        alert("Store hàng rỗng");
    }
}

do {
    choice = +prompt("MENU\n1. Hiển thị danh sách điện thoại theo hãng\n2. Thêm điện thoại mới vào cửa hàng\n3. Tìm kiếm điện thoại theo tên hoặc id\n4. Mua điện thoại\n5. Thanh toán tất cả điện thoại trong giỏ hàng\n6. Sắp xếp điện thoại theo giá\n7. Hiển thị tổng số tiền của các điện thoại trong kho\n8. Hiển thị tổng số lượng điện thoại theo từng hàng\n9. Thoát chương trình\nLua chon cua ban:");
    switch (choice) {
        case 1:
            showPhoneByBrand();
            break;
        case 2:
            addPhoneInStore();
            break;
        case 3:
            findPhoneByNameOrID();
            break;
        case 4:
            buyPhone();
            break;
        case 5:
            checkoutCart();
            break;
        case 6:
            sortIphoneByPrice();
            break;
        case 7:
            totalPriceByAllPriceFromStore();
            break;
        case 8:
            totalPhoneByBrand();
            break;
        case 9:
            alert("Thoat chuong trinh");
            break;
        default:
            alert("Lua chon khong hop le");
    }
} while (choice !== 9);