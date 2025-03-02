let a_input = +prompt("moi ban nhap vao so a");
let b_input = +prompt("moi ban nhap vao so a");
let operation_input = prompt("moi ban nhap vao phep tinh (+, -, *, /)");

switch (operation_input) {
    case "+":
        alert("a + b = " + (a_input + b_input));
        break;
    case "-":
        alert("a - b = " + (a_input - b_input));
        break;
    case "*":
        alert("a * b = " + (a_input * b_input));
        break;
    case "/":
        alert("a / b = " + (a_input / b_input));
        break;
    default:
        break;
}


