let fontSize = 24;

function changeFontSize(value) {
    fontSize += value;
    if (fontSize < 10) {
        fontSize = 10;
    } 
    if (fontSize > 100) {
        fontSize = 100;
    } 
    document.getElementById("text").style.fontSize = fontSize + "px";
}