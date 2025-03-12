// Viết một hàm nhận vào một mảng số và trả về một mảng chỉ chứa các số nguyên tố.
// Kết quả mong muốn
// input
// [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// []
// “abc”

// output
// [2, 3, 5, 7]
// Mảng không có phần tử nào
// Dữ liệu không hợp lệ

function integer(arr) {
    if (Array.isArray(arr)) {
        if (arr.length > 0) {
            let arr2 = [];
            for (let i = 0; i < arr.length; i++){
                if (arr[i] > 1 && Number.isInteger(arr[i])) {
                    let flag = true;
                    for (let j = 2; j < arr[i]; j++){
                        if (arr[i] % j === 0) {
                            flag = false;
                            break;
                        }
                    }
                    if (flag) {
                        arr2.push(arr[i]);
                    }
                }
            }
            if (arr2 != []) {
                alert(`[${arr2}]`);
            }
        } else {
            alert("Mảng không có phần tử nào");
        }
    } else {
        alert("Dữ liệu không hợp lệ");
    }
}
integer([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);