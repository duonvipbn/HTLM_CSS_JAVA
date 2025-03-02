let a = +prompt("nhap a");
let b = +prompt("nhap b");
let c = +prompt("nhap c");

if (a == b && b == c) {
    alert("Tam giác đều");
} else if (a == b || a == c || b == c) {
    alert("Tam giác cân");
} else if (a * a + b * b == c * c || a * a + c * c == b * b || b * b + c * c == a * a) {
    alert("Tam giác vuông");
} else {
    alert("Tam giác thường");
}