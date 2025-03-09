let n = +prompt("n:");
let characters = [];

if (n <= 0 || isNaN(n)) {
    console.log("Không có ký tự số");
} else {
    for (let i = 0; i < n; i++) {
        let char = prompt(`Nhập ký tự thứ ${i + 1}:`);
        characters.push(char);
    }

    let digitChars = [];
    for (let i = 0; i < characters.length; i++) {
        if (!isNaN(characters[i])) {
            digitChars.push(characters[i]);
        }
    }

    if (digitChars.length > 0) {
        alert("Ký tự số trong mảng: " + digitChars.join(" "));
    } else {
        alert("Không có ký tự số");
    }
}
