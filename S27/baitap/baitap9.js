function sortEven(arr) {
    if (Array.isArray(arr)) {
        if (arr.length > 0) {
            let evenNumbers = [];

            for (let i = 0; i < arr.length; i++) {
                if (arr[i] % 2 === 0) {
                    evenNumbers.push(arr[i]);
                }
            }
            for (let i = 0; i < evenNumbers.length - 1; i++) {
                for (let j = 0; j < evenNumbers.length - 1 - i; j++) {
                    if (evenNumbers[j] > evenNumbers[j + 1]) {
                        let temp = evenNumbers[j];
                        evenNumbers[j] = evenNumbers[j + 1];
                        evenNumbers[j + 1] = temp;
                    }
                }
            }

            let evenIndex = 0;
            for (let i = 0; i < arr.length; i++) {
                if (arr[i] % 2 === 0) {
                    arr[i] = evenNumbers[evenIndex];
                    evenIndex++;
                }
            }

            alert(arr);
        } else {
            alert("Mang rong");
        }
    } else {
        alert("Du lieu khong hop le");
    }
}

sortEven([5, 8, 6, 3, 4, 2, 7]);
