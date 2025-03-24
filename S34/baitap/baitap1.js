function register() {
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;
    let confirmPassword = document.getElementById("confirmPassword").value;
    let message = document.getElementById("message");

    message.textContent = "";

    if (!email || !password) {
        message.textContent = "Email và mật khẩu không được để trống!";
        return;
    }

    if (password !== confirmPassword) {
        message.textContent = "Mật khẩu xác nhận không khớp!";
        return;
    }

    let users = JSON.parse(localStorage.getItem("users")) || [];
    let userExists = users.some(user => user.email === email);

    if (userExists) {
        message.textContent = "Email này đã được đăng ký!";
        return;
    }

    users.push({ email, password });
    localStorage.setItem("users", JSON.stringify(users));
    message.style.color = "green";
    message.textContent = "Đăng ký thành công!";
}