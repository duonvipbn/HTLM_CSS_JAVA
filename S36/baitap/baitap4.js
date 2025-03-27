let nameData = "dataS36B4";
let getData = localStorage.getItem(nameData) || "false";
if (getData === "false") {
    document.body.classList.add("dark-mode");
} else {
    document.body.classList.remove("dark-mode");
}
function changeColor() {
    let getData = localStorage.getItem(nameData) || "false";
    if (getData === "true") {
        document.body.classList.add("dark-mode");
        localStorage[nameData] = "false";
    } else {
        document.body.classList.remove("dark-mode");
        localStorage[nameData] = "true";
    }
}
