let taskList = JSON.parse(localStorage.getItem("tasks")) || [];
localStorage.removeItem("tasks");

const btn = document.getElementById("btn");

const taskInput = document.getElementById("task");

const ul = document.getElementById("task-list");

btn.addEventListener("click", () => {
    addTask();
});


// add task
function addTask() {
    const task = taskInput.value;
    if (task) {
        taskList.push({
            Text: task,
            completed: false,
        });

        localStorage.setItem("tasks", JSON.stringify(taskList));
        saveTasks();

        taskInput.value = "";
        displayTasks();
    }
}

// display tasks
function displayTasks() {
    ul.innerHTML = "";
    taskList.forEach((task, index) => {
        const li = document.createElement("li");
        li.innerHTML = `<span>${task.Text}</span>
                        <button onClick="clearTask(${index})">Complete</button>`


    if(task.completed) {
        li.style.textDecoration = "line-through";
    } 

    ul.appendChild(li);
    });

    const completedTask = document.createElement("button");
    completedTask.textContent = "Clear All";
    completedTask.addEventListener("click", clearAll);
    ul.appendChild(completedTask);
}

// all task delete
function clearAll() {
    taskList = [];
    localStorage.removeItem("tasks");
    displayTasks();
} 

// single task delete
function clearTask(index) {
    taskList[index].completed = !taskList[index].completed ;
    saveTasks();
    displayTasks();
}

// save tasks to local storage
function saveTasks() {
    localStorage.setItem("tasks", JSON.stringify(taskList));
}





