let a = +prompt("input a:");
let b = +prompt("input b:");
let c = +prompt("input c:");

let delta = b * b - 4 * a * c;

if (delta > 0) {
    let x1 = (-b + Math.sqrt(delta)) / (2 * a);
    let x2 = (-b - Math.sqrt(delta)) / (2 * a);
    alert(`x1 = ${x1}, x2 = ${x2}`);
} else {
    alert("delta must > 0");
}