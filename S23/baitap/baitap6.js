let array = ["", false, 0, 5, 10, "Hello world!"];

let newArr = [];
for (let i = 0; i < array.length; i++) {
    if (array[i]) {
        newArr.push(array[i]);
    }
}

alert(newArr);
