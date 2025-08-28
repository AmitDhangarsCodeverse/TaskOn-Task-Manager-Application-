"use strict";
// Element Quering
const taskcontainer = document.body.querySelector("tbody");
// some raw data
let rawdata = [
    {
        id: 0,
        tasktitle: "Marketing Strategy Plan",
        taskassignee: "Priya Sharma",
        taskduedate: "next week",
        taskstage: "todo",
        taskpriority: "low",
        taskteam: "marketing",
    },
    {
        id: 2,
        tasktitle: "QA Testing for Release",
        taskassignee: "Vikram Singh",
        taskstage: "review",
        taskpriority: "high",
        taskteam: "qa",
        taskduedate: "next hours",
    },
];
window.addEventListener("DOMContentLoaded", () => {
    const taskData = localStorage.getItem("tasks");
    let taskdata = JSON.parse(taskData);
    taskdata.push(rawdata[0]);
    // Looping through data
    taskdata.forEach((tasks) => {
        const taskholder = document.createElement("tr");
        taskholder.classList.add("task");
        taskholder.innerHTML = `
                 <td>
             ${tasks.tasktitle} 
            </td>
            <td>${tasks.taskduedate}</td>
            <td>${tasks.taskstage}</td>
            <td>${tasks.taskpriority}</td>
            <td>${tasks.taskteam}</td>
            <td>${tasks.taskassignee}</td>
            <td ><img class="remove-task" src="https://cdn-icons-png.flaticon.com/512/3687/3687412.png" value=${tasks.id}></td>`;
        taskcontainer === null || taskcontainer === void 0 ? void 0 : taskcontainer.appendChild(taskholder);
    });
    // removeTask Functionality
    const removeTask = document.body.querySelectorAll(".remove-task");
    removeTask.forEach((task) => {
        task.addEventListener("click", (idx) => {
        });
    });
});
