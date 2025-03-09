let numbers = [1, 5, 51, 7, 13, 7, 112, 761, 7, 3];

let arr = [];
for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] >= 10) {
        arr.push(numbers[i]);
    }
}

if (arr.length > 0) {
    alert(arr.join(" "));
} else {
    alert("Không có số nào lớn hơn 10");
}
