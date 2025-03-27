let dataName = "dataS36B3";
let getData = localStorage.getItem(dataName) || "";
function changeBackgroundColor(color) {
    document.body.style.backgroundColor = color;
    localStorage.setItem(dataName, color);
}
changeBackgroundColor(getData);