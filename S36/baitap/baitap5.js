let dataName = "dataS36B5";
function getData() {
    return JSON.parse(localStorage.getItem(dataName)) || [];
}

function addItem() {
    let inputItem = document.getElementById("inputItem").value.trim();
    if (inputItem) {
        let data = getData();
        let id;
        if (data.length === 0) {
            id = 1;
        } else {
            id = data[data.length - 1].id + 1;
        }
        let temp = {
            id,
            work: inputItem,
            status: 1,
        };
        data.push(temp);
        localStorage[dataName] = JSON.stringify(data);
        render();
        alert("them thanh cong!!")
    } else {
        alert("Co gi do da sai!!");
    }
    document.getElementById("inputItem").value = "";
}
function render() {
    let pendingMess = "";
    let workingMess = "";
    let doneMess = "";
    let data = getData();
    for (let i = 0; i < data.length; i++){
        if (data[i].status === 3) {
            doneMess += `<p>${data[i].work}</p>`;
        }else if (data[i].status === 2) {
            workingMess += `
            <p>${data[i].work}</p>
            <button onclick="nextStatus(${data[i].id})">Chuyen tiep</button>
            `;
        } else {
            pendingMess += `
            <p>${data[i].work}</p>
            <button onclick="nextStatus(${data[i].id})">Chuyen tiep</button>
            `;
        }
    }
    document.getElementById("pending").innerHTML = pendingMess;
    document.getElementById("working").innerHTML = workingMess;
    document.getElementById("done").innerHTML = doneMess;
}

function nextStatus(id) {
    let data = getData();
    for (let i = 0; i < data.length; i++){
        if (data[i].id === id) {
            data[i].status ++; 
            localStorage[dataName] = JSON.stringify(data);
            render();
            return;
        }
    }
}

render();