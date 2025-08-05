// Element Quering 
const taskTitle = document.body.querySelector(".tasktitle");
const taskDay = document.body.querySelectorAll(".day");
const taskTime = document.body.querySelectorAll(".time");
const taskpriorty = document.body.querySelector(".taskpriorty");
const tasktags = document.body.querySelector(".tasktags");
const taskAssignee = document.body.querySelector(".taskassignee");
const taskDescription = document.body.querySelector(".taskdescription");
const createTaskbtn = document.body.querySelector("button");
const cancelAddtask = document.body.querySelector(".ri-close-line");
const Taskform = document.body.querySelector("form");
export const addTaskComponent = document.body.querySelector(".newtask-container");
// Object
let taskForm = {
    tasktitle: "",
    taskday: "",
    tasktime: "",
    tasktags: "",
    taskprioriry: "",
    taskassignee: "",
    taskdes: "",
};
// signatures
let handleTaskchange;
let handleTasksubmit;
let handleTaskValidation;
// Functions
handleTaskValidation = (validData) => {
    var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p;
    if (((_a = validData === null || validData === void 0 ? void 0 : validData.tasktitle) === null || _a === void 0 ? void 0 : _a.trim()) === "") {
        taskTitle.style.border = "1px solid red";
    }
    if ((_b = validData === null || validData === void 0 ? void 0 : validData.tasktitle) === null || _b === void 0 ? void 0 : _b.trim()) {
        taskTitle.style.border = "0px solid red";
    }
    if (((_c = validData === null || validData === void 0 ? void 0 : validData.taskday) === null || _c === void 0 ? void 0 : _c.trim()) === "") {
        taskDay[0].style.border = "1px solid red";
    }
    if ((_d = validData === null || validData === void 0 ? void 0 : validData.taskday) === null || _d === void 0 ? void 0 : _d.trim()) {
        taskDay[0].style.border = "0px solid red";
    }
    if (((_e = validData === null || validData === void 0 ? void 0 : validData.tasktime) === null || _e === void 0 ? void 0 : _e.trim()) === "") {
        taskTime[0].style.border = "1px solid red";
    }
    if ((_f = validData === null || validData === void 0 ? void 0 : validData.tasktime) === null || _f === void 0 ? void 0 : _f.trim()) {
        taskTime[0].style.border = "0px solid red";
    }
    if (((_g = validData === null || validData === void 0 ? void 0 : validData.taskprioriry) === null || _g === void 0 ? void 0 : _g.trim()) === "") {
        taskpriorty.style.border = "1px solid red";
    }
    if ((_h = validData === null || validData === void 0 ? void 0 : validData.taskprioriry) === null || _h === void 0 ? void 0 : _h.trim()) {
        taskpriorty.style.border = "0px solid red";
    }
    if (((_j = validData === null || validData === void 0 ? void 0 : validData.tasktags) === null || _j === void 0 ? void 0 : _j.trim()) === "") {
        tasktags.style.border = "1px solid red";
    }
    if ((_k = validData === null || validData === void 0 ? void 0 : validData.tasktags) === null || _k === void 0 ? void 0 : _k.trim()) {
        tasktags.style.border = "0px solid red";
    }
    if (((_l = validData === null || validData === void 0 ? void 0 : validData.taskassignee) === null || _l === void 0 ? void 0 : _l.trim()) === "") {
        taskAssignee.style.border = "1px solid red";
    }
    if ((_m = validData === null || validData === void 0 ? void 0 : validData.taskassignee) === null || _m === void 0 ? void 0 : _m.trim()) {
        taskAssignee.style.border = "0px solid red";
    }
    if (((_o = validData === null || validData === void 0 ? void 0 : validData.taskdes) === null || _o === void 0 ? void 0 : _o.trim()) === "") {
        taskDescription.style.border = "1px solid red";
    }
    if ((_p = validData === null || validData === void 0 ? void 0 : validData.taskdes) === null || _p === void 0 ? void 0 : _p.trim()) {
        taskDescription.style.border = "0px solid red";
    }
    if (validData.tasktitle && validData.taskday && validData.tasktime && validData.taskprioriry && validData.tasktags && validData.taskassignee && validData.taskdes) {
        return 1;
    }
};
handleTaskchange = (e) => {
    const { name, value } = e.target;
    taskForm = Object.assign(Object.assign({}, taskForm), { [name]: value });
};
handleTasksubmit = (data) => {
    localStorage.setItem("tasks", JSON.stringify(data));
    taskTitle.value = "";
    taskDay.innerHTML = "";
    taskTime.innerHTML = "";
    taskpriorty.value = "";
    taskAssignee.value = "";
    tasktags.value = "";
    taskDescription.value = "";
};
//Event Listeners
taskTitle.addEventListener("change", handleTaskchange);
taskpriorty.addEventListener("change", handleTaskchange);
tasktags.addEventListener("change", handleTaskchange);
taskAssignee.addEventListener("change", handleTaskchange);
taskDescription.addEventListener("change", handleTaskchange);
createTaskbtn.addEventListener("click", Taskform.submit);
Taskform.addEventListener("submit", (e) => {
    e.preventDefault();
    const valid = handleTaskValidation(taskForm);
    if (valid) {
        handleTasksubmit(taskForm);
    }
});
cancelAddtask.addEventListener("click", () => {
    window.document.body.removeChild(addTaskComponent);
});
//  Iterating Day and time
taskDay.forEach((day) => {
    day.addEventListener("click", () => {
        taskForm.taskday = day.innerHTML;
    });
});
taskTime.forEach((time) => {
    time.addEventListener("click", () => {
        taskForm.tasktime = time.innerHTML;
    });
});
