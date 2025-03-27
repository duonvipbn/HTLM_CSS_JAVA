let dataName = "dataS36B7";
let mode = 1;

function registerFont() {
    document.getElementById("name").innerHTML = "Đăng ký";
    document.getElementById("remenberBox").classList.add("hidden");
    document.getElementById("remenberBoxComment").classList.add("hidden");
    document.getElementById("registerButton").innerHTML = "Đăng ký";
    document.getElementById("aTag").innerHTML = "Quay lại đăng nhập";
}

function loginFont() {
    document.getElementById("name").innerHTML = "Đăng nhập";
    document.getElementById("remenberBox").classList.remove("hidden");
    document.getElementById("remenberBoxComment").classList.remove("hidden");
    document.getElementById("registerButton").innerHTML = "Đăng nhập";
    document.getElementById("aTag").innerHTML = "Chưa có tài khoản? Đăng ký";
}

function getData() {
    return JSON.parse(localStorage.getItem(dataName)) || [];
}

function getRememberedUser() {
    return JSON.parse(localStorage.getItem("rememberUserS36B7")) || null;
}

function changeMode() {
    mode = mode === 1 ? 2 : 1;
    mode === 1 ? registerFont() : loginFont();
}

function acountMain() {
    let inputName = document.getElementById("inputName").value.trim();
    let inputPassword = document.getElementById("inputPassword").value.trim();
    if (!inputName || !inputPassword) {
        alert("Vui lòng nhập đầy đủ thông tin!");
        return;
    }
    let data = getData();
    if (mode === 1) {
        for (let user of data) {
            if (inputName === user.name) {
                alert("Tên đã tồn tại! Mời nhập lại.");
                return;
            }
        }
        data.push({ name: inputName, password: inputPassword });
        localStorage.setItem(dataName, JSON.stringify(data));
        alert("Đăng ký thành công!");
    } else {
        let userExists = data.find(user => user.name === inputName && user.password === inputPassword);
        if (userExists) {
            alert("Đăng nhập thành công!");
            if (document.getElementById("remenberBox").checked) {
                localStorage.setItem("rememberUserS36B7", JSON.stringify(inputName));
            }
            showHome(inputName);
        } else {
            alert("Tên đăng nhập hoặc mật khẩu không đúng!");
        }
    }
    document.getElementById("inputName").value = "";
    document.getElementById("inputPassword").value = "";
}

function showHome(userName) {
    document.getElementById("loginForm").classList.add("hidden");
    document.getElementById("home").classList.remove("hidden");
    document.getElementById("username").innerText = userName;
}

function logout() {
    localStorage.removeItem("rememberUserS36B7");
    alert("Bạn đã đăng xuất!");
    location.reload();
}

window.onload = function () {
    let rememberedUser = getRememberedUser();
    if (rememberedUser) {
        showHome(rememberedUser);
    }
};
registerFont();