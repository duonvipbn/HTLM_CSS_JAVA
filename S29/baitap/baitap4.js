// Viết chương trình quản lý các công việc trong danh sách, bao gồm id công việc, tên công việc, mô tả, thời gian bắt đầu và trạng thái.

// Các chức năng:

// Thêm công việc mới.
// Hiển thị tất cả các công việc.
// Cập nhật trạng thái công việc theo id.
// Lọc các công việc theo trạng thái hoàn thành, chưa hoàn thành.
// Sắp xếp các công việc theo trạng thái công việc.
//     Thoát.

let works = [];
let choice;
function addWork() {
    let id = +prompt("ID:");
    let name = prompt("Name:");
    let describe = prompt("Mo ta:");
    let start = prompt("Thoi gian bat dau");
    let status = Boolean(prompt("Trang thai:"));
    works.push({ id, name, describe, start, status });
}
function showWorks() {
    if (works.length >= 1) {
        let message = "Danh sach cac cong viec:\n";
        for (let i = 0; i < works.length; i++){
            message += `id: ${works[i].id}, name: ${works[i].name}, describe: ${works[i].describe}, start: ${works[i].start}, status: ${works[i].status}\n`;
        }
        alert(message);
    } else {
        alert("Mang rong");
    }
}
function updateStatusItem() {
    if (works.length >= 1) {
        let input = prompt("Nhap id can nhap trang thai:");
        let flag = -1;
        for (let i = 0; i < works.length; i++) {
            if (works[i].id == input) {
                flag = i;
                break;
            }
        }
        if (flag !== -1) {
            let a1 = works[flag].status ? "Hoan thanh" : "chua hoan thanh";
            let a2 = !works[flag].status ? "Hoan thanh" : "chua hoan thanh";
            let input = prompt(`Cong viec dang ${a1}, co muon ${a2} khong?(y/n)`);
            if (input == "y") {
                works[flag].status = works[flag].status ? false : true;
                alert(`Da chinh thanh ${a2}`);
            } else {
                alert("Cau lenh da bi huy");
            }
        } else {
            alert("Khong tim thay id");
        }
    }else {
        alert("Mang rong");
    }   
}
function filterWorks() {
    if (works.length >= 1) {
        let message1 = "Danh sach cong viec hoan thanh:\n";
        let message2 = "Danh sach cong viec chua hoan thanh:\n";

        for (let i = 0; i < works.length; i++) {
            if (works[i].status) {
                message1 += `id: ${works[i].id}, name: ${works[i].name}, describe: ${works[i].describe}, start: ${works[i].start}\n`;
            } else {
                message2 += `id: ${works[i].id}, name: ${works[i].name}, describe: ${works[i].describe}, start: ${works[i].start}\n`;
            }
        }
        alert(message1);
        alert(message2);
    } else {
        alert("Mang rong");
    }
}
function sortWorks() {
    if (works.length >= 1) {
        for (let i = 0; i < works.length - 1; i++){
            for(let j = 0; j < works.length - 1 - i; j++){
                if (works[j].status < works[j+1].status) {
                    let temp = works[j];
                    works[j] = works[j + 1];
                    works[j + 1] = temp;
                }
            }
        }
        alert("Sap sep thanh cong");
    } else {
        alert("Mang rong");
    }
}
do {
    choice = +prompt("MENU\n1. Thêm công việc mới.\n2. Hiển thị tất cả các công việc.\n3. Cập nhật trạng thái công việc theo id.\n4. Lọc các công việc theo trạng thái hoàn thành, chưa hoàn thành.\n5. Sắp xếp các công việc theo trạng thái công việc.\n6. Thoát.\nLua chon cua ban:");
    switch (choice) {
        case 1:// Thêm công việc mới.id, tên, mô tả, thời gian bắt đầu và trạng thái.
            addWork();
            break;
        case 2:// Hiển thị tất cả các công việc.
            showWorks();
            break;
        case 3:// Cập nhật trạng thái công việc theo id.
            updateStatusItem();
            break;
        case 4:// Lọc các công việc theo trạng thái hoàn thành, chưa hoàn thành.
            filterWorks();
            break;
        case 5:// Sắp xếp các công việc theo trạng thái công việc.
            sortWorks();
            break;
        case 6:// thoat
            alert("Thoat");
            break;
        default:
            alert("Lua chon sai");
    }
} while (choice !== 6);