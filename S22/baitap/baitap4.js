let num = +prompt("Nhập số:");

if (num) {
    let array = num.toString().split("");
    let array_reverse = array.reverse();
    let length = array.length;
    // cach1
    // let max_num = Math.max(...array);
    // alert(max_num);
    // cach2
    let max_num = array[0];
    for (let i = 0; i < length; i++) {
        if (array[i] > max_num) {
            max_num = array[i];
        }
    }
    alert(`${max_num} là số lớn nhất trong dãy số`);
} else {
    alert("dãy số không hợp lệ");
}