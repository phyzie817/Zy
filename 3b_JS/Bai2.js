
function getTasks() {
    return [
        {
            text: "Nhiệm vụ 1",
            completed: false
        },
        {
            text: "Nhiệm vụ 2",
            completed: true
        }
    ];
}

function showTasks() {
    var tasks = getTasks();

    var ul = document.querySelector("#list ul");

    for (var i = 0; i < tasks.length; i++) {
        var task = tasks[i];

        var li = document.createElement("li");
        li.textContent = task.text;

        if (task.completed) {
            li.classList.add("completed");
        }

        ul.appendChild(li);
    }
}
function addTask() {
    var task = document.querySelector("#task").value;

    var tasks = getTasks();
    tasks.push({
        text: task,
        completed: false
    });

    showTasks();

    document.querySelector("#task").value = "";
}
$(document).ready(function () {
    showTasks();

    $("#add").click(function () {
        addTask();
    });
});