let products = [
    ["mì tôm", 5, 5000],
    ["bánh mì", 12, 15000],
    ["bánh bao", 5, 8000],
    ["mèn mén", 30, 20000]
];

let cart = [];

function showProducts() {
    let message = "Danh sách sản phẩm có sẵn:\n";
    for (let i = 0; i < products.length; i++) {
        message += `${products[i][0]} - Số lượng: ${products[i][1]} - Giá: ${products[i][2]} VND\n`;
    }
    alert(message);
}

function addToCart(productName) {
    let found = false;
    for (let i = 0; i < products.length; i++) {
        if (products[i][0].toLowerCase() === productName.toLowerCase()) {
            found = true;
            if (products[i][1] > 0) {
                products[i][1]--;
                let inCart = false;
                for (let j = 0; j < cart.length; j++) {
                    if (cart[j][0] === productName) {
                        cart[j][1]++;
                        inCart = true;
                        break;
                    }
                }
                if (!inCart) {
                    cart.push([productName, 1, products[i][2]]);
                }
                alert(`Đã thêm ${productName} vào giỏ hàng.`);
            } else {
                alert(`${productName} đã hết hàng.`);
            }
            break;
        }
    }
    if (!found) {
        alert("Sản phẩm không có trong cửa hàng.");
    }
}

function showCart() {
    let message = "Giỏ hàng của bạn:\n";
    let total = 0;
    for (let i = 0; i < cart.length; i++) {
        message += `${cart[i][0]} - Số lượng: ${cart[i][1]} - Giá: ${cart[i][2]} VND\n`;
        total += cart[i][1] * cart[i][2];
    }
    message += `Tổng tiền: ${total} VND`;
    alert(message);
}

let choice;
do {
    choice = +prompt("MENU\n1. Xem danh sách sản phẩm có sẵn.\n2. Chọn sản phẩm để mua.\n3. Xem giỏ hàng và tính tổng tiền.\n4. Thoát\nLựa chọn của bạn:");
    switch (choice) {
        case 1:
            showProducts();
            break;
        case 2:
            let productName = prompt("Nhập tên sản phẩm cần mua:");
            addToCart(productName);
            break;
        case 3:
            showCart();
            break;
        case 4:
            alert("Thoát mua sắm.");
            break;
        default:
            alert("Sai input.");
    }
} while (choice !== 4);