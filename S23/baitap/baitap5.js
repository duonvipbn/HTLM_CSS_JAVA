
let n = +prompt("n:");
let characters = [];


if (n < 0 || isNaN(n)) {
    alert("Số lượng phần tử không được âm");
} else if (n === 0) {
    alert("Mảng không có phần tử");
} else {
    for (let i = 0; i < n; i++) {
        let char = prompt(`characters[${i}]:`);
        characters.push(char);
    }

    let sum = 0;
    let hasNumber = false;
    for (let i = 0; i < characters.length; i++) {
        if (!isNaN(characters[i])) {
            sum += parseInt(characters[i]);
            hasNumber = true;
        }
    }
    if (hasNumber) {
        alert(sum);
    } else {
        alert("Không có phần tử nào là số");
    }
}
