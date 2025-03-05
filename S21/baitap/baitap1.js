let total = 0;

for (let i = 0; i < 5; i++){
    let input = +prompt(`input number ${i+1}:`);
    if (input % 2 !== 0 || input === 1) {
        total += input;
    }
}
alert(`total = ${total}`);