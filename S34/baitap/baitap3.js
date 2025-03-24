document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("loginForm").addEventListener("submit", function (event) {
        event.preventDefault();
        const email = document.getElementById("email").value.trim();
        const password = document.getElementById("password").value.trim();
        if (email === "" || password === "") {
            alert("Vui lòng nhập đầy đủ thông tin!");
            return;
        }
        let users = JSON.parse(localStorage.getItem("users")) || [];
        let foundUser = users.find(user => user.email === email && user.password === password);
        if (foundUser) {
            alert("Đăng nhập thành công!");
            localStorage.setItem("currentUser", JSON.stringify(foundUser));
            window.location.href = "index.html";
        } else {
            alert("Email hoặc mật khẩu không đúng!");
        }
    });
});