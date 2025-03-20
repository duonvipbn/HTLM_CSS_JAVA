function check() {
    let input = document.getElementById("input").value;
    let hasA = false;
    for (let i = 0; i < input.length; i++){
        if (input[i] === "@") {
            hasA = true;
            break;
        }
    }
    document.getElementById("show").classList.remove("visible");
    if (!hasA) {
        document.getElementById("show").innerHTML = "email khong hop le!";
        document.getElementById("show").className = "red";
        return;
    }
    console.log(input[input.length - 1], input[input.length - 2], input[input.length - 3]);
    
    if ((input[input.length - 1] === "n" && input[input.length - 2] === "v" && input[input.length - 3] === ".") || (input[input.length - 1] === "m" && input[input.length - 2] === "o" && input[input.length - 3] === "c" && input[input.length - 4] === ".")) {
        document.getElementById("show").innerHTML = "email hop le!";
        document.getElementById("show").className = "green";
        return;
    }
    document.getElementById("show").innerHTML = "email khong hop le!";
    document.getElementById("show").className = "red";
}