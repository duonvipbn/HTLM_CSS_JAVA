function openImage(imgElement) {
    let overlay = document.getElementById("overlay");
    let overlayImg = document.getElementById("overlay-img");
    overlay.style.display = "flex";
    overlayImg.src = imgElement.src;
}

function closeImage() {
    document.getElementById("overlay").style.display = "none";
}