function findLowestElement(arr) {
    if (Array.isArray(arr)) {
        if (arr.length === 0) {
            alert("mảng không chứa phần tử")
        } else {
            let min = Infinity;
            for (let i = 0; i < arr.length; i++){
                if (min > arr[i]) {
                    min = arr[i];
                }
            }
            alert(`phần tử nhỏ nhất trong mảng là ${min}`);
        }
    } else {
        alert("giá trị không hợp lệ");
    }
}

findLowestElement([1,4,2,6,17,8,4]);