let products = [
    {
        id: 1,
        name: "mèn mén",
        price: 20000,
        quantity: 20,
        category:"món ăn dân tộc Mông",
    },
    {
        id: 2,
        name: "mứt",
        price: 80000,
        quantity: 21,
        category: "món ăn dân tộc Kinh",
    },
    {
        id: 3,
        name: "cơm lam",
        price: 40000,
        quantity: 15,
        category: "món ăn dân tộc Mông",
    },
    {
        id: 4,
        name: "bánh đậu xanh",
        price: 60000,
        quantity: 30,
        category: "món ăn dân tộc Kinh",
    },
]
let cart = [];
let choice;

function showProducts() {
    let choice = +prompt("Mời bạn nhập lựa chọn:\n1: Món ăn dân tộc kinh.\n2: Món ăn dân tộc Mông.");
    let message = "";
    if (choice == 1) {
        for (let i = 0; i < products.length; i++){
            if (products[i].category == "món ăn dân tộc Kinh") {
                message += `ID: ${products[i].id}, Name: ${products[i].name}, Price: ${products[i].price}, Quantity: ${products[i].quantity}\n`;
            }
        }
    } else if (choice == 2) {
        for (let i = 0; i < products.length; i++) {
            if (products[i].category == "món ăn dân tộc Mông") {
                message += `ID: ${products[i].id}, Name: ${products[i].name}, Price: ${products[i].price}, Quantity: ${products[i].quantity}\n`;
            }
        }
    }
    if (message !== "") {
        alert(message);
    } else {
        alert("Lựa chọn không hợp lệ"); 
    }
}
function selectProductById() {
    let idInput = +prompt("Nhập id sản phẩm cần mua:");
    let flag = -1;
    for (let i = 0; i < products.length; i++){
        if (products[i].id === idInput) {
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
        if (products[flag].quantity <= 0) {
            products[flag].quantity = 0;
            alert("Đã hết sản phẩm");
            return;
        }
        if (quantityInput > products[flag].quantity) {
            alert("Không đủ số lượng sản phẩm");
            return;
        }

        products[flag].quantity -= quantityInput;

        let flagRed = -1;
        for (let i = 0; i < cart.length; i++){
            if (cart[i].id == products[flag].id) {
                flagRed = i;
                break;
            }
        }
        if (flagRed === -1) {
            cart.push({
                id: products[flag].id,
                name: products[flag].name,
                price: products[flag].price,
                quantity: quantityInput,
                category: products[flag].category,
            });
        } else {
            cart[flagRed].quantity += quantityInput;
        }
        alert("Đã mua thành công!");
        //console.log(cart);
    } else {
        alert("Không tìm thấy id sẳn phẩm");
    }
}
function sortProducts() {
    let choice = +prompt("1.Tăng dần.\n2.Giảm dần.\n Lựa chọn của bạn:");
    if (choice === 1) {
        for (let i = 0; i < products.length - 1; i++){
            for (let j = 0; j < products.length - 1 - i; j++){
                if (products[j].price < products[j + 1].price) {
                    let temp = products[j];
                    products[j] = products[j + 1];
                    products[j + 1] = temp;
                }
            }
        }
    } else if (choice === 2) {
        for (let i = 0; i < products.length - 1; i++) {
            for (let j = 0; j < products.length - 1 - i; j++) {
                if (products[j].price > products[j + 1].price) {
                    let temp = products[j];
                    products[j] = products[j + 1];
                    products[j + 1] = temp;
                }
            }
        }
    } else {
        alert("Lựa chọn không hợp lệ");
        return;
    }
    let message = "";
    for (let i = 0; i < products.length; i++) {
        message += `ID: ${products[i].id}, Name: ${products[i].name}, Price: ${products[i].price}, Quantity: ${products[i].quantity}\n`;
    }
    alert(message);
}
function totalCart() {
    if (cart.length >= 1) {
        let total = 0;
        for (let i = 0; i < cart.length; i++){
            total += cart[i].price * cart[i].quantity;
        }
        alert(`Tổng số tiền cần thanh toán trong giỏ hàng là: ${total} VND`);
    } else {
        alert("Rỏ hàng rỗng");
    }
}
do {
    choice = +prompt("MENU\n1. Hiển thị các sản phẩm theo tên danh mục.\n2. Chọn sản phẩm để mua bằng cách nhập id sản phẩm.\n3. Sắp xếp các sản phẩm trong cửa hàng theo giá.\n4. Tính số tiền thanh toán trong giỏ hàng.\n5. Thoát.\nLựa chọn của bạn:");
    switch (choice) {
        case 1:
            showProducts();
            break;
        case 2:
            selectProductById();
            break;
        case 3:
            sortProducts();
            break;
        case 4:
            totalCart();
            break;
        case 5:
            alert("Thoát chương trình");
            break;
        default:
            alert("Lựa chọn sai");
    }
} while (choice !== 5);