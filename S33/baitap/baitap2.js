function active() {
    document.getElementsByTagName("p")[0].innerHTML = `${document.getElementById("text").value.trim().length} ky tu`;
}
active();