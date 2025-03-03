let a = +prompt("a:");
let b = +prompt("b:");
let c = +prompt("c:");

if (a === 0) {
    if (b === 0) {
        alert(c === 0 ? "Phương trình có vô số nghiệm." : "Phương trình vô nghiệm.");
    } else {
        alert(`Phương trình có một nghiệm: x = ${-c / b}`);
    }
} else {
    const delta = b * b - 4 * a * c;
    if (delta < 0) {
        alert("Phương trình vô nghiệm.");
    } else if (delta === 0) {
        alert(`Phương trình có nghiệm kép: x1 = x2 = ${-b / (2 * a)}`);
    } else {
        const x1 = (-b + Math.sqrt(delta)) / (2 * a);
        const x2 = (-b - Math.sqrt(delta)) / (2 * a);
        alert(`Phương trình có hai nghiệm phân biệt: x1 = ${x1}, x2 = ${x2}`);
    }
}
