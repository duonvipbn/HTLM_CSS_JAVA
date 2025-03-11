function evenNumber(arr) {
    if (Array.isArray(arr)) {
        let chat = "";
        for (let i = 0; i < arr.length; i++){
            if (arr[i] % 2 === 0) {
                chat = chat + arr[i];
            }
        }
        if (chat !== "") {
            return chat.split("").join(", ");
        } else {
            return "mảng không chứa số chẵn";
        }
    } else {
        return "dữ liệu không hợp lệ";
    }
}

alert(evenNumber([1, 4, 2, 5, 7]));