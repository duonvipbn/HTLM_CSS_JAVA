let list = [];
if (localStorage.list) {
    list = JSON.parse(localStorage.list); 
}

function render() {
    let message = "";
    for (let i = 0; i < list.length; i++) {
        message += `
            <div class="item">
                <p class="mess">${list[i].message}</p>
                <div class="button">
                    <button onclick="editItem(${list[i].id})">Sửa</button>
                    <button onclick="deleteItem(${list[i].id})">Xóa</button>
                </div>
            </div>
        `;
    }
    document.getElementById("list").innerHTML = message;
}

function addItem() {
    let input = document.getElementById("input").value;
    if (!input) return; 

    let id = list.length === 0 ? 1 : list[list.length - 1].id + 1;
    let newItem = { id, message: input };
    list.push(newItem);
    localStorage.list = JSON.stringify(list);  

    document.getElementById("input").value = ""; 
    render();
}

function editItem(id) {
    let newMessage = prompt("Chinh sua cong viec:");
    if (newMessage) {
        let item = list.find(item => item.id === id);
        item.message = newMessage;
        localStorage.list = JSON.stringify(list); 
        render(); 
    }
}

function deleteItem(id) {
    list = list.filter(item => item.id !== id);
    localStorage.list = JSON.stringify(list); 
    render(); 
}

render();
