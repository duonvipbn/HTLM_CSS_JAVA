let dataName = "listS35B4";
let paqe = 1;
let paqeSpace = 3;

function getData() {
    return JSON.parse(localStorage.getItem(dataName)) || [];
}

function addEmployee() {
    let nameEmployee = document.getElementById("nameEmployee").value.trim();
    let jobEmployee = document.getElementById("jobEmployee").value.trim();

    if (nameEmployee && jobEmployee) {
        let list = getData();
        let temp = { name: nameEmployee, job: jobEmployee };
        list.push(temp);
        localStorage.setItem(dataName, JSON.stringify(list));
        render();
    } else {
        alert("Vui lòng nhập đầy đủ thông tin!");
    }

    document.getElementById("nameEmployee").value = "";
    document.getElementById("jobEmployee").value = "";
}

function newTabs(pageNumber) {
    paqe = pageNumber;
    render();
}

function render() {
    let list = getData();
    let totalPaqe = Math.ceil(list.length / paqeSpace);

    let mess = `
                <thead>
                    <tr>
                        <td>STT</td>
                        <td>Tên</td>
                        <td>Chức vụ</td>
                    </tr>
                </thead>
            `;

    let start = (paqe - 1) * paqeSpace;
    let end = start + paqeSpace;

    for (let i = start; i < end; i++) {
        if (i >= list.length) break;
        mess += `
                    <tr>
                        <td>${i + 1}</td>
                        <td>${list[i].name}</td>
                        <td>${list[i].job}</td>
                    </tr>
                `;
    }

    let messButtonList = `<button onclick="newTabs(${paqe - 1})" ${paqe === 1 ? "disabled" : ""}>Previous</button>`;

    for (let i = 1; i <= totalPaqe; i++) {
        messButtonList += `<button onclick="newTabs(${i})" ${paqe === i ? "disabled" : ""}>${i}</button>`;
    }

    messButtonList += `<button onclick="newTabs(${paqe + 1})" ${paqe === totalPaqe ? "disabled" : ""}>Next</button>`;

    document.getElementById("list").innerHTML = mess;
    document.getElementById("pagination").innerHTML = messButtonList;
}

render();