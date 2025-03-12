// Viết chương trình khởi tạo nhập vào một mảng số nguyên gồm 10 phần tử.Chương trình thực hiện hiển thị các số nguyên lớn hơn hoặc bằng 10 ra màn hình.
// 3. Kết quả mong muốn
// input
// [1, 22, 10, 9, 8] => [22, 10]
// [] => Mảng không có phần tử nào
// “abc” => Dữ liệu không hợp lệ

function filter(arr) {
    if (Array.isArray(arr)) {
        if (arr.length > 0) {
            let arr2 = [];
            for (let i = 0; i < arr.length; i++){
                if (Number.isInteger(arr[i]) && arr[i] >= 10) {
                    arr2.push(arr[i]);
                }
            }
            alert(`[${arr2}]`);
        } else {
            alert("Mảng không có phần tử nào");
        }
    } else {
        alert("Dữ liệu không hợp lệ");
    }
}
filter([1, 22, 10, 9, 8, 6, 3, 100, 6, 86]);