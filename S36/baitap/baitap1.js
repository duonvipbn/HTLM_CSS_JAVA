let nameData = "nameS36B1";

function saveName() {
    let plrInput = document.getElementById("input").value.trim();
    if (plrInput) {
        alert("thanh cong");
        localStorage.setItem(nameData, JSON.stringify(plrInput));
        document.getElementById("inputGui").classList.add("hideGui");
        showHelloGui()
        document.getElementById("helloGui").classList.remove("hideGui");

    } else {
        alert("Something wrong!!");
    }
    document.getElementById("input").value = "";
}
function showInputGui() {
    document.getElementById("inputGui").classList.remove("hideGui");
    document.getElementById("helloGui").classList.add("hideGui");
}
function showHelloGui() {
    let message = `<h1>Chao ban, ${JSON.parse(localStorage.getItem(nameData)) }!</h1><button onclick="showInputGui()">Doi ten</button>`;
    document.getElementById("helloGui").innerHTML = message;
}