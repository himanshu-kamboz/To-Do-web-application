let newTask = document.getElementById("new-task");
let addBtn = document.getElementById("add-task");
let tasks = document.getElementById("tasks");
let totalTasks = document.getElementById("task-count");

let countTasks = 0;

addBtn.addEventListener("click", addTask);

newTask.addEventListener("keypress", function (e) {
    if (e.key === "Enter") {
        addTask();
    }
});

function addTask() {

    let task = newTask.value.trim();

    if (task === "") {
        alert("enter a task");
        return;
    }

    let li = document.createElement("li");

    let span = document.createElement("span");
    span.textContent = task;

    let completeBtn = document.createElement("button");
    completeBtn.textContent = "✓";
    completeBtn.classList.add("btn-1");

    let removeBtn = document.createElement("button");
    removeBtn.textContent = "delete";
    removeBtn.classList.add("btn-2");

    li.appendChild(span);
    li.appendChild(completeBtn);
    li.appendChild(removeBtn);

    tasks.appendChild(li);

    countTasks++;

    totalTasks.textContent = countTasks;

    newTask.value = "";

    completeBtn.addEventListener("click", function () {
        span.classList.toggle("newList");

    })

    removeBtn.addEventListener("click", function () {
        li.remove();
        countTasks--;
        totalTasks.textContent = countTasks;
    })

    let taskArray = JSON.parse(localStorage.getItem("tasks")) || [];

    taskArray.push(task);

    localStorage.setItem("tasks", JSON.stringify(taskArray));
    
}

