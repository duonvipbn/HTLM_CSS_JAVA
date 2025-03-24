let tasks = JSON.parse(localStorage.getItem("tasks")) || [
    { id: 1, content: "Learn Javascript Session 01", dueDate: "2023-04-17", status: "Pending", assignedTo: "Anh Bách" },
    { id: 2, content: "Learn Javascript Session 2", dueDate: "2023-04-17", status: "Pending", assignedTo: "Lâm" },
    { id: 3, content: "Learn CSS Session 1", dueDate: "2023-04-17", status: "Pending", assignedTo: "Hiếu Ci Ớt Ớt" }
];

function renderTasks() {
    const taskTable = document.getElementById("taskTable");
    taskTable.innerHTML = "";
    tasks.forEach((task, index) => {
        taskTable.innerHTML += `
                    <tr>
                        <td>${index + 1}</td>
                        <td>${task.content}</td>
                        <td>${task.dueDate}</td>
                        <td>${task.status}</td>
                        <td>${task.assignedTo}</td>
                        <td>
                            <button onclick="editTask(${task.id})">Sửa</button>
                            <button onclick="deleteTask(${task.id})">Xóa</button>
                        </td>
                    </tr>
                `;
    });
    localStorage.setItem("tasks", JSON.stringify(tasks));
}

function addTask() {
    const content = document.getElementById("content").value;
    const dueDate = document.getElementById("dueDate").value;
    const status = document.getElementById("status").value;
    const assignedTo = document.getElementById("assignedTo").value;

    if (!content || !dueDate || !assignedTo) {
        alert("Please fill all fields!");
        return;
    }

    const newTask = {
        id: tasks.length ? tasks[tasks.length - 1].id + 1 : 1,
        content,
        dueDate,
        status,
        assignedTo
    };
    tasks.push(newTask);
    renderTasks();
}

function editTask(id) {
    const task = tasks.find(t => t.id === id);
    if (!task) return;

    document.getElementById("content").value = task.content;
    document.getElementById("dueDate").value = task.dueDate;
    document.getElementById("status").value = task.status;
    document.getElementById("assignedTo").value = task.assignedTo;

    deleteTask(id);
}

function deleteTask(id) {
    tasks = tasks.filter(t => t.id !== id);
    renderTasks();
}

renderTasks();