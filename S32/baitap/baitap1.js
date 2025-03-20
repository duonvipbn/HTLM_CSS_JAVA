function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}

function randomRGB() {
    
    return `rgb(${getRndInteger(0, 255)}, ${getRndInteger(0, 255)}, ${getRndInteger(0, 255)})`;
}

function changeColor() {
    document.getElementById("container").style.backgroundColor = randomRGB();
}