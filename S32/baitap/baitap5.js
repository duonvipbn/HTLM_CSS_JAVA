let quests = [
    { id: 1, name: "Học DOM JS" },
    { id: 2, name: "Làm bài tập DOM JS" }
];

function showQuests() {
    let mess = "";
    for (let i = 0; i < quests.length; i++) {
        mess += `<li>
                    <span style="font-family: verdana;">${quests[i].name}</span> 
                    <button class="delButton" onclick="delQuest(${quests[i].id})">X</button>
                 </li>`;
    }
    document.getElementById("list").innerHTML = mess;
}

function addQuest() {
    let input = document.getElementById("input").value.trim();
    if (input.length > 0) {  // Kiểm tra input không rỗng
        let id = quests.length > 0 ? quests[quests.length - 1].id + 1 : 1;
        quests.push({ id, name: input });
        showQuests();
    } else {
        alert("Nội dung không hợp lệ");
    }
    document.getElementById("input").value = "";
}

let confirmCheck = false;
let selectFlag = -1;

function delQuest(id) {
    let flag = -1;
    for (let i = 0; i < quests.length; i++) {
        if (quests[i].id === id) {
            flag = i;
            break;
        }
    }

    if (flag !== -1) {
        let buttons = document.getElementsByClassName("delButton");

        if (confirmCheck && selectFlag === flag) {
            quests.splice(flag, 1);
            showQuests();
            confirmCheck = false;
            selectFlag = -1;
        } else {
            for (let i = 0; i < buttons.length; i++) {
                buttons[i].innerHTML = "X";
            }

            buttons[flag].innerHTML = "Confirm";
            confirmCheck = true;
            selectFlag = flag;
        }
    }
}

showQuests();
