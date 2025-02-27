let d1 = prompt("input day 1:");
let d2 = prompt("input day 2:");

const date1 = new Date(d1);
const date2 = new Date(d2);
if (isNaN(date1) || isNaN(date2)) {
    alert("Wrong input, please enter true format YYYY-MM-DD.");
} else {
    let sum = Math.abs(date1 - date2) / (1000 * 60 * 60 * 24);
    alert(sum);
}