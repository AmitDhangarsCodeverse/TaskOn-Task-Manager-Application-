// Element Quering
const taskcontainer = document.body.querySelector(".tasks");
// interfaces
interface Idata {
  tasktitle:string;
  duedate:string;
  stage:string;
  priority:string;
  team:string;
  assignee:string;
}
// some raw data

let rawdata: Array<Idata> = [
  {
    tasktitle: "Develop a Tourism Website",
    duedate: "today",
    stage: "inprogress",
    priority: "high",
    team: "development",
    assignee: "Amit Dhangar",
  },
  {
    tasktitle: "Design Landing Page",
    duedate: "tomorrow",
    stage: "todo",
    priority: "medium",
    team: "design",
    assignee: "Sara Khan",
  },
  {
    tasktitle: "Set Up CI/CD Pipeline",
    duedate: "next week",
    stage: "inprogress",
    priority: "high",
    team: "devops",
    assignee: "Ravi Patel",
  },
  {
    tasktitle: "Write Blog Content",
    duedate: "today",
    stage: "review",
    priority: "low",
    team: "marketing",
    assignee: "Neha Verma",
  },
  {
    tasktitle: "User Feedback Analysis",
    duedate: "friday",
    stage: "done",
    priority: "medium",
    team: "product",
    assignee: "Amit Dhangar",
  },
];

// Looping through data

rawdata.forEach((task => {
 const taskholder = document.createElement("div");
 taskholder.classList.add("task");
 taskholder.innerHTML = ` <div class="tasktitle">
                 <div class="checkbox"><i class="ri-check-double-line"></i></div>
                  <p>${task.tasktitle}</p>
                </div>
                <ul>
                  <li class="day">${task.duedate}</li>
                  <li class="stage">${task.stage}</li>
                  <li class="priorty">${task.priority}</li>
                  <li class="team">${task.team}</li>
                  <li class="assignee">
                    <img
                      src="https://img.freepik.com/premium-photo/fun-unique-cartoon-profile-picture-that-represents-your-style-personality_1283595-14213.jpg"
                      alt=""
                    />
                  </li>
                </ul>`;

          taskcontainer?.appendChild(taskholder);
}))