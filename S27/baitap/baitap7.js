function addElement(arr) {
    if (Array.isArray(arr)) {
        if (arr.length >= 2) {
            let arithmetic = arr[1] - arr[0];

            for (let i = arr.length - 1; i > 0; i--) {
                if (arr[i] - arr[i - 1] !== arithmetic) {
                    arr.splice(i, 0, arr[i - 1] + arithmetic);
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

addElement([1, 2, 4, 5]);
