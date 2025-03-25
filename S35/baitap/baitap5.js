let dataName = "listS35B5";

function getData() {
    return JSON.parse(localStorage.getItem(dataName)) || [];
}

function showAddGui() {
    document.getElementById("addGui").classList.toggle("hide");
}

function render() {
    let message = `
        <tr>
            <td class="td1 tdHeader">Ma danh muc <i class="fa-solid fa-arrow-down"></i></td>
            <td class="td2 tdHeader">Ten danh muc <i class="fa-solid fa-arrow-down"></i></td>
            <td class="td3 tdHeader">Trang thai</td>
            <td class="td4 tdHeader">Chuc nang</td>
        </tr>
    `;
    let list = getData();
    for (let i = 0; i < list.length; i++){
        let statusMess = "";
        if (list[i].status === "Dang hoat dong") {
            statusMess = `<td class="td3"><mark class="statusOn">&bull; ${list[i].status}</mark></td>`;
        } else {
            statusMess = `<td class="td3"><mark class="statusOff">&bull; ${list[i].status}</mark></td>`;
        }
        message += `
            <tr>
                <td class="td1">${list[i].id}</td>
                <td class="td2">${list[i].name}</td>
                ${statusMess}
                <td class="td4"><button class="trashButton"><i class="fa-solid fa-trash"></i></button> <button class="penButton"><i class="fa-solid fa-pen"></i></button></td>
            </tr>
        `;
    }
    document.getElementById("fontTable").innerHTML = message;
}
function addItem() {
    let idInput = document.getElementById("inputID").value.trim();
    let nameInput = document.getElementById("inputName").value.trim();
    if (idInput && nameInput) {
        let list = getData();
        document.getElementById("errorIDAlert").classList.add("hide");
        document.getElementById("errorNameAlert").classList.add("hide");
        for (let i = 0; i < list.length; i++){
            if (idInput === list[i].id) {
                document.getElementById("errorIDAlert").classList.remove("hide");
                document.getElementById("errorIDAlert").innerHTML = "ID bi trung lap moi nhap lai!!";
                return;
            }
        }
        let status = document.querySelector('input[name="status"]:checked').value;

        let temp = {
            id: idInput,
            name: nameInput,
            status
        };
        list.push(temp);
        localStorage[dataName] = JSON.stringify(list);
        document.getElementById("inputID").value = "";
        document.getElementById("inputName").value = "";
        document.querySelector('input[name="status"]').checked = true;
        render();
        showAddGui();
    } else if (!idInput && !nameInput) {
        document.getElementById("errorIDAlert").classList.remove("hide");
        document.getElementById("errorNameAlert").classList.remove("hide");
    } else if (!nameInput) {
        document.getElementById("errorIDAlert").classList.add("hide");
        document.getElementById("errorNameAlert").classList.remove("hide");
    } else if (!idInput) {
        document.getElementById("errorIDAlert").classList.remove("hide");
        document.getElementById("errorNameAlert").classList.add("hide");
    }
}

render()