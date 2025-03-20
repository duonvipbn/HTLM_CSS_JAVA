let subjects = [
    { name: "toan" },
    { name: "ly" },
    { name: "hoa" },


];

function addSubject() {
    let input = document.getElementById("input").value.trim();
    if (input && input[0] !== " ") {
        subjects.push({ name: input });
        showSubject()
        document.getElementById("input").value = "";
    } else {
        alert("Tên môn học không được để trống!");
    }
}
function showSubject() {
    let mess = "";
    for (let i = 0; i < subjects.length; i++){
        mess += `<li>${subjects[i].name}</li>`;
    }
    document.getElementById("subjectsGuiList").innerHTML = mess;

}

showSubject()