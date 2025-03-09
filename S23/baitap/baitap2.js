let arr = [1, 5, 3, 7, 8, 4, 2, 6, 8, 3];
let arr_length = arr.length;
let highest_element = arr[0];
let highest_element_index = 0;
for (let i = 0; i < arr_length; i++){
    if (arr[i] > highest_element) {
        highest_element = arr[i];
        highest_element_index = i;
    }
}

alert(`
Số lớn nhất: ${highest_element}
Vị trí: ${highest_element_index}
`);