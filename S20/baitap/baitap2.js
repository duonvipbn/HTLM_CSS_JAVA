let input = +prompt("Nhập môt só nguyên từ 1 - n:");
if (input >= 1) {
    let array = [];
    let index = 0;
    for (let i = 1; i <= input; i++) {
        if (i % 5 === 0) {
            array[index] = i;
            index++;
        }
    }
    
    let chat = "";
    for (let i = 0; i < index; i++){
        chat = chat + array[i] + ", ";
    }
    alert(`Các số chia hết cho 5 từ 1 đến ${input} là : ${chat}`);
    
    
} else {
    alert("Dữ liệu nhập vào không hợp lệ.");
}