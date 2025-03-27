let dataName = "listRemakeS35B4";
let page = 1;
let pageSpace = 3;

function getData() {
    return JSON.parse(localStorage.getItem(dataName)) || [];
}

function addEmployee() {
    let inputName = document.getElementById("inputName").value.trim();
    let inputJob = document.getElementById("inputJob").value.trim();
    if (inputJob && inputName) {
        let list = getData();
        let temp = {
            name: inputName,
            job: inputJob
        };
        list.push(temp);
        localStorage[dataName] = JSON.stringify(list);
        alert("Them thanh cong!!");
        render();
    } else {
        alert("Nhap vao khong dung moi nhap lai!!");
    }
    document.getElementById("inputName").value = "";
    document.getElementById("inputJob").value = "";
}
function newTabs(numberPage) {
    page = numberPage;
    render();
};

function render() {
    let list = getData();

    let totalPage = Math.ceil(list.length/pageSpace);
    let start = (page - 1) * pageSpace;
    let end = page * pageSpace;

    let message = `
        <tr>
            <td class="tableSTT">STT</td>
            <td class="tableName">Ten</td>
            <td class="tableJob">Chuc vu</td>
        </tr>
    `;

    for (let i = start; i < end; i++){
        if (i >= list.length) break;
        message += `
            <tr>
                <td class="tableNormal">${i+1}</td>
                <td class="tableNormal">${list[i].name}</td>
                <td class="tableNormal">${list[i].job}</td>
            </tr>
        `;
    }
    document.getElementById("list").innerHTML = message;

    let buttonMessage = `<button class="paginationButton" onclick="newTabs(${page - 1})" ${page === 1 ? "disabled" : ""}>Previous</button>`;
    for (let i = 1; i <= totalPage; i++){
        buttonMessage += `<button class="paginationButton" onclick="newTabs(${i})" ${page === i ? "disabled" : ""}>${i}</button>`;
    }
    buttonMessage += `<button class="paginationButton" onclick="newTabs(${page + 1})" ${page === totalPage ? "disabled" : ""}>Next</button>`;

    document.getElementById("pagination").innerHTML = buttonMessage;
}
render();