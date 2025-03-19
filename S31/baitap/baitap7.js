
let todoList = [
    { id: 1, task: 'Hit the gym', completed: false },
    { id: 2, task: 'Pay bills', completed: true },
    { id: 3, task: 'Meet George', completed: false },
    { id: 4, task: 'Buy eggs', completed: false },
    { id: 5, task: 'Read a book', completed: false },
    { id: 6, task: 'Organize office', completed: false }
];

function renderList() {
    let listHTML = "";
    for (let i = 0; i < todoList.length; i++) {
        let checkedClass = todoList[i].completed ? 'checked' : '';
        listHTML += `<li class="${checkedClass}" onclick="toggleTask(${i})">${todoList[i].task}</li>`;
    }
    document.getElementById("myUL").innerHTML = listHTML;
}

function addTask() {
    let inputValue = document.getElementById("myInput").value;
    if (inputValue === '') {
        alert("Vui lòng nhập công việc!");
        return;
    }

    let newTask = {
        id: todoList.length + 1,
        task: inputValue,
        completed: false
    };

    todoList.push(newTask);
    renderList();
    document.getElementById("myInput").value = ""; 
}


function toggleTask(index) {
    todoList[index].completed = !todoList[index].completed;
    renderList();
}

renderList();
