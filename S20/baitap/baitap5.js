let input_a = +prompt("a:");
let input_b = +prompt("b:");
let total = 1;
if (input_a && input_b && input_a != 0) {
    if (input_b > 0) {
        for (let i = 0; i < input_b; i++) {
            total *= input_a;
        }
    } else {
        // 5^-2 = 1/(5^2)
        for (let i = 0; i < input_b; i++) {
            total *= input_a;
        }
        
    }
    alert(total);
} else {
    alert("Không hợp lệ");
}
