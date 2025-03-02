let num = +prompt("input number (0-999):");

function findNumRead(num) {
    switch (num) {
        case 0: return "không";
        case 1: return "một";
        case 2: return "hai";
        case 3: return "ba";
        case 4: return "bốn";
        case 5: return "năm";
        case 6: return "sáu";
        case 7: return "bảy";
        case 8: return "tám";
        case 9: return "chín";
    }
}

if (num >= 0 && num <= 999) {
    let hundred = Math.floor(num / 100);
    let remainder = num % 100;
    let ten = Math.floor(remainder / 10);
    let one = remainder % 10;

    alert(
            (hundred ? findNumRead(hundred) + " trăm" : "") +
            (remainder ?
                (hundred && !ten ? " lẻ" : "") +
                (ten === 1 ? " mười" : ten > 1 ? " " + findNumRead(ten) + " mươi" : "") +
                (one ? " " + (one === 1 && ten > 1 ? "mốt" : one === 5 && ten > 0 ? "lăm" : findNumRead(one)) : "")
                : ""
            )
        );
} else {
    alert("error");
}
