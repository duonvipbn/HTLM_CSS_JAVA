let users = [];

function isValidEmail(email) {
    let symbol = false;
    let validEnding = false;

    for (let i = 0; i < email.length; i++) {
        if (email[i] === '@') {
            symbol = true;
            break;
        }
    }

    let length = email.length;
    if ((length >= 4 && email[length - 4] === '.' && email[length - 3] === 'c' && email[length - 2] === 'o' && email[length - 1] === 'm') ||
        (length >= 3 && email[length - 3] === '.' && email[length - 2] === 'v' && email[length - 1] === 'n')) {
        validEnding = true;
    }

    return symbol && validEnding;
}

function registerEmail(email) {
    if (!isValidEmail(email)) {
        console.log("Email không hợp lệ!");
        return;
    }

    for (let i = 0; i < users.length; i++) {
        if (users[i] === email) {
            console.log("Tài khoản đã tồn tại!");
            return;
        }
    }

    users.push(email);
    console.log("Đăng ký thành công!");
}


registerEmail("rhrdh@gmail.com");
registerEmail("rhrdh@gmail.com");
registerEmail("dhrd@domain.vn");
console.log(users);
