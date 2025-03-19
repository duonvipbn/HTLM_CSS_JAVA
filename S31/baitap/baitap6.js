function checkLogin() {
    const correctUsername = "huanrose@gmail.com";
    const correctPassword = "123456";

    const usernameInput = document.getElementById("username").value;
    const passwordInput = document.getElementById("password").value;

    if (usernameInput === correctUsername && passwordInput === correctPassword) {
        console.log("Đăng nhập thành công");
    } else {
        console.log("Đăng nhập thất bại");
    }
}