let input = prompt("nhập:");
if ((input.length === 1) && (isNaN(input)) && (input.toLowerCase() !== input.toUpperCase())) {
    alert(`Ký tự ${input} là chữ cái`);
} else {
    alert(`${input} là không là chữ cái`);
}
