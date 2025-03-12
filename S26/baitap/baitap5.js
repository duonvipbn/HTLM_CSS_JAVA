// Viết chương trình nhập vào mảng số nguyên có 10 phần tử.thực hiện tìm ra số lớn và vị trí của số đó ra màn hình bằng các hàm có sẵn trong array methods
//Kết quả mong muốn
// input
// [10, 9, 5, 11, 24, 5]
// []
// “abc”
// output
// max = 24 position: 4
// Mảng ko có dữ liệu
// Dữ liệu không hợp lệ
function integer(arr) {
    if (Array.isArray(arr)) {
        if (arr.length > 0) {
            let maxElement = -Infinity;
            let maxElementIndex;
            for (let i = 0; i < arr.length; i++){
                if (Number.isInteger(arr[i]) && arr[i] > maxElement) {
                    maxElement = arr[i];
                    maxElementIndex = i;
                }
            }
            if (maxElement != -Infinity) {
                alert(`max: ${maxElement}\nposition: ${maxElementIndex}`);
            }
        } else {
            alert("Mảng ko có dữ liệu");
        }
    } else {
        alert("Dữ liệu không hợp lệ");
    }
}
integer([10, 9, 5, 11, 24, 5]);