// Cho danh sách email, viết hàm lọc ra các email hợp lệ (có chứa ký tự "@" và không có khoảng trắng)
// input
// ["john.doe@gmail.com", "invalidemail.com", "hello@domain.net", "space@out.com"]
// []
// “abc”
// output
// ["john.doe@gmail.com", "hello@domain.net"]
// Mảng không có phần tử nào
// Dữ liệu không hợp lệ

function email(arr) {
    if (Array.isArray(arr)) {
        if (arr.length > 0) {
            let arr2 = [];
            for (let i = 0; i < arr.length; i++){
                let hasA = false;
                let hasSpace = false;
                for (let j = 0; j < arr[i].length; j++){
                    if (arr[i][j] == "@") {
                        hasA = true;
                    }
                    if (arr[i][j] == " ") {
                        hasSpace = true;
                    }
                }
                if (hasA && !hasSpace) {
                    arr2.push(`"${arr[i]}"`);
                }
            }
            if (arr2 != []) {
                alert(`[${arr2}]`);
            }
        } else {
            alert("Mảng không có phần tử nào");
        }
    }else{
        alert("Dữ liệu không hợp lệ");
    }
}

email(["john.doe@gmail.com", "invalidemail.com", "hello@domain.net", "space@out.com"]);