let numbers = [2, 5, 7, 4, 1, 8, 6, 2, 5, 7];
let numbers_length = numbers.length;
let max_element = 0;
let min_element = 0;


for (let i = 0; i < numbers_length; i++) {
    let count = 0;
    for (let j = 0; j < numbers_length; j++) {
        if (numbers[i] === numbers[j]) {
            count++;
        }
    }

    if (count > max_element) {
        max_element = count;
        min_element = numbers[i];
    } else if (count === max_element && numbers[i] < min_element) {
        min_element = numbers[i];
    }
}

alert(`${min_element}`);
