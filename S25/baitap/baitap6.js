function isPalindrome(str) {
    str = str.toLowerCase();
    return str === str.split("").reverse().join("");
}

let input = prompt("Nhập chuỗi:");

if (input) {
    if (isPalindrome(input)) {
        alert("là chuỗi đối xứng");
    } else {
        alert("không phải chuỗi đối xứng");
    }
} else {
    alert("Sai input");
}
