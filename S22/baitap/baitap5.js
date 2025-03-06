let arr = [1, 4, 7, 8, 3];
let total_even = 0;
let total_odd = 0;
let length = arr.length;

for (let i = 0; i < length; i++) {
    if (arr[i] % 2 === 0) {
        total_even += arr[i];
    } else {
        total_odd += arr[i];
    }
}
console.log("Tổng các số chẵn: " + total_even);
console.log("Tổng các số lẻ: " + total_odd);
