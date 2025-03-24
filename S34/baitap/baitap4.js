document.addEventListener("DOMContentLoaded", loadTodos);
function loadTodos() {
    let todos = JSON.parse(localStorage.getItem("todos")) || [];
    let list = document.getElementById("todoList");
    list.innerHTML = "";
    todos.forEach((todo, index) => {
        let li = document.createElement("li");
        li.innerHTML = `${todo} <button class='delete-btn' onclick='deleteTodo(${index})'>Xóa</button>`;
        list.appendChild(li);
    });
}
function addTodo() {
    let input = document.getElementById("todoInput");
    let todoText = input.value.trim();
    if (todoText === "") return;
    let todos = JSON.parse(localStorage.getItem("todos")) || [];
    todos.push(todoText);
    localStorage.setItem("todos", JSON.stringify(todos));
    input.value = "";
    loadTodos();
}
function deleteTodo(index) {
    let todos = JSON.parse(localStorage.getItem("todos"));
    todos.splice(index, 1);
    localStorage.setItem("todos", JSON.stringify(todos));
    loadTodos();
}