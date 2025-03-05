let a = +prompt("a:");
let b = +prompt("b:");
let c = +prompt("c:");

let delta = b * b - 4 * a * c;

if (delta < 0) {
    alert("Phương trình vô nghiệm.");
} else if (delta == 0) {
    alert(`Phương trình có nghiệm kép x1 = x2 = ${-b/(2*a)}`)
} else if (delta > 0) {
    alert(`Phương trình có 2 nghiệm x1 = ${(-b + Math.sqrt(delta)) / (2 * a)}, x2 = ${(-b - Math.sqrt(delta)) / (2 * a)}`)
}
