let input = +prompt("Chọn 1-2: 1.VND-->USD, 2.USD-->tiền(VND):");
switch (input) {
    case 1:
        let input_VND = +prompt("nhập tiền VND:");
        alert(`${Math.floor(input_VND / 23000)} USD`)
        break;
    case 2:
        let input_USD = +prompt("nhập tiền USD:");
        alert(`${Math.floor(input_USD * 23000)} VND`)
        break;

    default:
        alert("sai cú pháp");
        break;
}
