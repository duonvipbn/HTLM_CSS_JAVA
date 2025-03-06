let num = +prompt("Nhập số:");

if (num) {
    //cach1
    // let array = num.toString().split("");
    // let array_reverse = array.reverse();
    // let length = array.length;
    // let print = "";
    // for (let i = 0; i < length; i++) {
    //     print += array_reverse[i];
    // }
    // alert(print);
    //cach2
    let array = num.toString().split("");
    let array_reverse = array.reverse().join("");
    alert(array_reverse);
} else {
    alert("Số không hợp lệ");
}
