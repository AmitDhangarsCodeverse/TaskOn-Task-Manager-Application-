"use strict";
// Element Quering
const notificationContainer = document.body.querySelector("ul");
// global object
let notificationHolder = {
    id: 0,
    title: "",
    description: "",
    image: "",
    assignee: "",
    deadline: "",
    priority: "",
    project: "",
};
// signatures
let notificationDetail;
// Demo data
const demoData = [
    {
        id: 1,
        title: "Design Login Page",
        description: "Create a modern and secure login interface for the platform.",
        image: "https://blog.photofeeler.com/wp-content/uploads/2017/09/instagram-profile-picture-maker.jpg",
        assignee: "Amit Dhangar",
        deadline: "2025-08-10",
        priority: "High",
        project: "Authentication Module",
    },
    {
        id: 2,
        title: "User Authentication",
        description: "Implement secure JWT-based login and signup functionality.",
        image: "https://blog.photofeeler.com/wp-content/uploads/2017/09/instagram-profile-picture-maker.jpg",
        assignee: "Sneha Rao",
        deadline: "2025-08-12",
        priority: "Critical",
        project: "Authentication Module",
    },
    {
        id: 3,
        title: "Dashboard UI",
        description: "Build a visually informative dashboard for daily use.",
        image: "https://blog.photofeeler.com/wp-content/uploads/2017/09/instagram-profile-picture-maker.jpg",
        assignee: "Rohan Mehta",
        deadline: "2025-08-15",
        priority: "Medium",
        project: "User Experience",
    },
    {
        id: 4,
        title: "API Integration",
        description: "Connect frontend components with backend APIs seamlessly.",
        image: "https://blog.photofeeler.com/wp-content/uploads/2017/09/instagram-profile-picture-maker.jpg",
        assignee: "Priya Sharma",
        deadline: "2025-08-14",
        priority: "High",
        project: "Core System",
    },
    {
        id: 5,
        title: "Task Board",
        description: "Develop a drag-and-drop task board similar to Trello.",
        image: "https://blog.photofeeler.com/wp-content/uploads/2017/09/instagram-profile-picture-maker.jpg",
        assignee: "Kunal Verma",
        deadline: "2025-08-18",
        priority: "Low",
        project: "Project Management",
    },
];
// functions
notificationDetail = (notificDetail) => {
    const notificContainer = document.body.querySelector(".detail-notification");
    notificContainer.innerHTML = `
                <div class="assignee detail">
                <i class="ri-user-5-line"><p>Assignee</p></i>
                <p><i class="ri-user-smile-line"></i>${notificDetail.assignee}</p>
              </div>
            </li>
            <li>
              <div class="deadline detail">
                <i class="ri-time-line"><p>Deadline</p></i>
                <p>${notificDetail.deadline}</p>
              </div>
            </li>
            <li>
              <div class="project detail">
                <i class="ri-list-check-3"><p>Project</p></i>
                <p>${notificDetail.project}</p>
              </div>
            </li>
            <li>
              <div class="priority detail">
                <i class="ri-list-check-2"><p>Priority</p></i>
                <p>${notificDetail.priority}</p>
              </div>`;
};
demoData.forEach((notify, idx) => {
    const notification = document.createElement("li");
    notification.innerHTML = `<div class = "notification">
                     <p>${notify.id}</p>
                   <div class="titleanddescription">
                  <p>${notify.title}</p>
                  <p>${notify.description}</p>
                     </div>
                  <img
                  src="${notify.image}"
                  alt=""
                />
   </div>`;
    notification.dataset.index = idx.toString();
    notificationContainer.appendChild(notification);
    const notificationlist = document.body.querySelectorAll("li");
    notificationlist.forEach((notific) => {
        notific.addEventListener("click", () => {
            const idx = parseInt(notific.dataset.index);
            const data = demoData[idx];
            notificationHolder = data;
            notificationDetail(notificationHolder);
        });
    });
});
