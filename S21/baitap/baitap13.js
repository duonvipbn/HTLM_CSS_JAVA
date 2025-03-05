document.write("<pre>");
document.write(`a.<br>`);
let count_a = 10;
for (let i = 0; i < 10; i++) {
    for (let y = 0; y < count_a; y++) {
        document.write("*");
    }
    document.write(`<br>`);
    count_a--;
}

document.write(`b.<br>`);
let count_b = 1;
for (let i = 0; i < 10; i++) {
    for (let y = 0; y < count_b; y++) {
        document.write("*");
    }
    document.write(`<br>`);
    count_b++;
}

document.write(`c.<br>`);
let count_c = 1;
let space_c = 10;
for (let i = 0; i < 10; i++) {
    for (let z = 0; z < space_c; z++) {
        document.write(" ");
    }
    for (let y = 0; y < count_c; y++) {
        document.write("*");
    }
    document.write(`<br>`);
    count_c++;
    space_c--;
}

document.write(`d.<br>`);
let count_d = 10;
let space_d = 1;
for (let i = 0; i < 10; i++) {
    for (let z = 0; z < space_d; z++) {
        document.write(" ");
    }
    for (let y = 0; y < count_d; y++) {
        document.write("*");
    }
    document.write(`<br>`);
    count_d--;
    space_d++;
}

document.write("</pre>");