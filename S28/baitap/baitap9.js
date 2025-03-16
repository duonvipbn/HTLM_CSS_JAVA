let books = [];

function addBook() {
    let id = +prompt("Nhập ID:");
    let title = prompt("Tên sách:");
    let author = prompt("Tác giả:");
    let year = +prompt("Năm xuất bản:");
    let price = parseFloat(prompt("Giá sách:"));
    let isAvailable = true;

    books.push({ id, title, author, year, price, isAvailable });
    alert("Đã thêm sách.");
}

function displayBooks() {
    if (books.length === 0) {
        alert("Không có sách.");
        return;
    }
    let message = "Danh sách sách:\n";
    for (let book of books) {
        message += `ID: ${book.id}, Tên: ${book.title}, Tác giả: ${book.author}, Năm: ${book.year}, Giá: ${book.price}, Trạng thái: ${book.isAvailable ? "Có sẵn" : "Đã mượn"}\n`;
    }
    alert(message);
}

function searchBook() {
    let title = prompt("Nhập tên sách:");
    let results = [];
    for (let i = 0; i < books.length; i++) {
        let match = true;
        for (let j = 0; j < title.length; j++) {
            if (books[i].title[j] !== title[j]) {
                match = false;
                break;
            }
        }
        if (match) {
            results.push(books[i]);
        }
    }
    if (results.length === 0) {
        alert("Không tìm thấy.");
        return;
    }
    let message = "Kết quả:\n";
    for (let i = 0; i < results.length; i++) {
        message += `ID: ${results[i].id}, Tên: ${results[i].title}, Tác giả: ${results[i].author}, Năm: ${results[i].year}, Giá: ${results[i].price}, Trạng thái: ${results[i].isAvailable ? "Có sẵn" : "Đã mượn"}\n`;
    }
    alert(message);
}

function updateBookStatus() {
    let id = +prompt("Nhập ID sách:");
    let book = null;
    for (let i = 0; i < books.length; i++) {
        if (books[i].id === id) {
            book = books[i];
            break;
        }
    }
    if (!book) {
        alert("Không tìm thấy.");
        return;
    }
    book.isAvailable = !book.isAvailable;
    alert("Đã cập nhật.");
}

function deleteBook() {
    let id = +prompt("Nhập ID sách:");
    let index = -1;
    for (let i = 0; i < books.length; i++) {
        if (books[i].id === id) {
            index = i;
            break;
        }
    }
    if (index === -1) {
        alert("Không tìm thấy.");
        return;
    }
    books.splice(index, 1);
    alert("Đã xóa sách.");
}

function sortBooksByPrice() {
    for (let i = 0; i < books.length - 1; i++) {
        for (let j = i + 1; j < books.length; j++) {
            if (books[i].price > books[j].price) {
                let temp = books[i];
                books[i] = books[j];
                books[j] = temp;
            }
        }
    }
    alert("Đã sắp xếp theo giá.");
}
let choice;
do {
    choice = prompt("MENU\n1. Thêm sách\n2. Hiển thị sách\n3. Tìm kiếm\n4. Cập nhật trạng thái\n5. Xóa sách\n6. Sắp xếp theo giá\n7. Thoát\nChọn:");
    switch (choice) {
        case "1":
            addBook();
            break;
        case "2":
            displayBooks();
            break;
        case "3":
            searchBook();
            break;
        case "4":
            updateBookStatus();
            break;
        case "5":
            deleteBook();
            break;
        case "6":
            sortBooksByPrice();
            break;
        case "7":
            alert("Thoát.");
            break;
        default:
            alert("Sai lựa chọn");
    }
} while (choice !== "7");
