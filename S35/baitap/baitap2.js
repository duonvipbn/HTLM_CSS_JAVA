function render() {
    let mess = "";
    let list = JSON.parse(localStorage.getItem("listS35Baitap2")) || [];
    for (let i = 0; i < list.length; i++){
        mess += `
            <div class="item">
                <img src="" alt="">
                <span>${list[i].name}</span>
                <button class="delete" onclick="deleteItem(${list[i].id})">x</button>
            </div>
        `;
    }
    document.getElementById("list").innerHTML = mess;

}
function addItem() {
    let nameWeb = document.getElementById("nameWeb").value;
    let uRLWeb = document.getElementById("uRLWeb").value;
    if (nameWeb && uRLWeb && nameWeb.length <= 20) {
        let list = JSON.parse(localStorage.getItem("listS35Baitap2")) || [];
        let id = list.length === 0 ? 1 : list[list.length - 1].id + 1;
        let temp = {
            name: nameWeb,
            uRL: uRLWeb,
            id: id
        };
        list.push(temp);
        localStorage.listS35Baitap2 = JSON.stringify(list);
        render();
    }
    document.getElementById("nameWeb").value = "";
    document.getElementById("uRLWeb").value = "";
}
function deleteItem(id) {
    let list = JSON.parse(localStorage.getItem("listS35Baitap2")) || [];
    let filter = list.filter(item => item.id !== id);
    localStorage.listS35Baitap2 = JSON.stringify(filter);
    render();
}
function showAddBookMark() {
    document.getElementById("addBookmark").classList.toggle("hide");
}
render();