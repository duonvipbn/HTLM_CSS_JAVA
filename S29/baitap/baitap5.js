let accounts = [];
let choice;

function checkEmail(email) {
    let atIndex = -1;
    let dotIndex = -1;

    for (let i = 0; i < email.length; i++) {
        if (email[i] === "@") {
            atIndex = i;
        }
        if (email[i] === ".") {
            dotIndex = i;
        }
    }

    if (atIndex > 0 && dotIndex > atIndex + 1) {
        let domain = email.substring(dotIndex + 1);
        if (domain === "com" || domain === "vn") {
            return true;
        }
    }
    return false;
}

function checkPassword(password) {
    let hasUpperCase = false;
    let hasSpecialChar = false;
    let specialChars = "!@#$%^&*";

    if (password.length < 6) {
        return false;
    }

    for (let i = 0; i < password.length; i++) {
        let char = password[i];
        if (char >= 'A' && char <= 'Z') {
            hasUpperCase = true;
        }
        for (let j = 0; j < specialChars.length; j++) {
            if (char === specialChars[j]) {
                hasSpecialChar = true;
                break;
            }
        }
    }

    return hasUpperCase && hasSpecialChar;
}

function signUp() {
    let name = prompt("Nhập tên:");
    let email = prompt("Nhập email:");

    if (!checkEmail(email)) {
        return alert("Email không hợp lệ");
    }

    for (let i = 0; i < accounts.length; i++) {
        if (accounts[i].email === email) {
            return alert("Email đã tồn tại");
        }
    }

    let password = prompt("Nhập mật khẩu (>=6 ký tự gồm ký tự đặc biệt, chữ hoa):");
    if (!checkPassword(password)) {
        return alert("Mật khẩu không hợp lệ");
    }

    accounts.push({ name, email, password });
    alert("Đăng ký thành công");
}

function signIn() {
    let email = prompt("Nhập email:");
    let password = prompt("Nhập mật khẩu:");

    let user = null;
    for (let i = 0; i < accounts.length; i++) {
        if (accounts[i].email === email && accounts[i].password === password) {
            user = accounts[i];
            break;
        }
    }
    if (user) {
        alert(`Đăng nhập thành công\nTên: ${user.name}\nEmail: ${user.email}`);  
    } else {
        alert("Sai email/mật khẩu");
    }
    
}

do {
    choice = +prompt("1. Đăng ký\n2. Đăng nhập\n3. Thoát\nChọn:");
    switch (choice) {
        case 1:
            signUp();
            break;
        case 2:
            signIn();
            break;
        case 3:
            alert("Thoát");
            break;
        default:
            alert("Sai lựa chọn");
    }
} while (choice !== 3);
