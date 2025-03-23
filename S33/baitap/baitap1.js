let check = false;

function active() {
    if (check) {
        document.getElementById("button").innerHTML = `<i class="fa-solid fa-eye-slash"></i>`;
        document.getElementById("input").type = "password";
        check = false;
    } else {
        document.getElementById("button").innerHTML = `<i class="fa-solid fa-eye"></i>`;
        document.getElementById("input").type = "text";
        check = true;
    }
}