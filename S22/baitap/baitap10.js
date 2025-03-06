let array = [];

let choice;
do {
    choice = Number(prompt("MENU/1. Nhập vào mảng/2. Hiển thị mảng/3. Thêm phần tử/4. Sửa phần tử/5. Xóa phần tử/6. Thoát"));

    switch (choice) {
        case 1:
            let input = prompt("Nhập các số cách nhau bằng dấu phẩy:");
            array = [];
            let inputArr = input.split(",");
            for (let i = 0; i < inputArr.length; i++) {
                array.push(Number(inputArr[i]));
            }
            break;
        case 2:
            alert("Mảng hiện tại: " + array.join(", "));
            break;
        case 3:
            let newElement = Number(prompt("Nhập số muốn thêm:"));
            array.push(newElement);
            break;
        case 4:
            let indexEdit = Number(prompt("Nhập vị trí muốn sửa:"));
            if (indexEdit >= 0 && indexEdit < array.length) {
                let newValue = Number(prompt("Nhập giá trị mới:"));
                array[indexEdit] = newValue;
            } else {
                alert("Sai vị trí");
            }
            break;
        case 5:
            let indexDelete = Number(prompt("Nhập vị trí muốn xóa:"));
            if (indexDelete >= 0 && indexDelete < array.length) {
                array.splice(indexDelete, 1);
            } else {
                alert("Sai vị trí");
            }
            break;
        case 6:
            alert("Thoát");
            break;
        default:
            alert("Lựa chọn sai");
    }
} while (choice !== 6);
