let input = prompt("nhập:");
if ((input.length === 1) && (typeof input === "string") && (input.toLowerCase() !== input.toUpperCase())) {
    alert(`Ký tự ${input} là chữ cái`);
} else {
    alert(`${input} là không là chữ cái`);
}