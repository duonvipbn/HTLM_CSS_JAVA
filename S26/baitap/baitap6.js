// Viết một hàm nhận vào một mảng chuỗi và trả về một mảng chứa các chuỗi ngày được định dạng là DD / MM / YYYY
// Kết quả mong muốn
// input
// ["2025-03-10", "2024-12-25", "2023-07-01"]
// []
// “abc”
// output
// ["10/03/2025", "25/12/2024", "01/07/2023"]
// Mảng không có phần tử nào
// Dữ liệu không hợp lệ
// str.split("").reverse().join("")


function date(arr) {
    if (Array.isArray(arr)) {
        if (arr.length > 0) {
            let result = [];
            for (let i = 0; i < arr.length; i++) {
                let parts = arr[i].split("-");
                console.log(parts);
                if (parts.length === 3) {
                    let [year, month, day] = parts;
                    result.push(`${day}/${month}/${year}`);
                } else {
                    result.push("Dữ liệu không hợp lệ");
                }
            }
            alert(result);
        } else {
            alert("Mảng không có phần tử nào");
        }
    }else{
        alert("Dữ liệu không hợp lệ");
    }
}

date(["2025-03-10", "2024-12-25", "2023-07-01"]);