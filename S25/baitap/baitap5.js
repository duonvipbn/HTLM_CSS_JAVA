function countInteger(arr) {
    let count = 0;
    if (Array.isArray(arr)) {
        if (arr.length >= 0) {
            let count = 0;
            for (let i = 0; i < arr.length; i++){
                if (Number.isInteger(arr[i]) && arr[i] > 0) {
                    count++;
                }
            }
            if (count !== 0) {
                return count;
            } else {
                return "không có số nguyên dương trong mảng";
            }
        } else {
            return "mảng rỗng";
        }
    } else {
        return "dữ liệu không hợp lệ";
    }    
}
alert(countInteger([1, 5, -5, -35]));






