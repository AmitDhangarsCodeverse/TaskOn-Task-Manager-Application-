// Element Query
let searchField = document.body.querySelector("input") as HTMLElement;
let searchIconBtn = document.body.querySelector(
  ".ri-search-line"
) as HTMLElement;
let searchResultContainer = document.body.querySelector(
  ".tasks"
) as HTMLElement;
// signatures
let getsearchInput: (data: isearchquery) => void;
let handlesearinputchange: (e: Event) => void;
let getfilteredList: () => void;
// rawdata
let demoProjects = [
  {
    id: 1,
    title: "Build E-commerce Website",
    description: "Task about building the online store.",
  },
  {
    id: 2,
    title: "E-commerce Checkout Integration",
    description: "Integrate checkout flow in online store.",
  },
  {
    id: 3,
    title: "API Integration for Payment Gateway",
    description: "Integrate payment gateway APIs.",
  },
  {
    id: 4,
    title: "Create Landing Page for Marketing",
    description: "Design a promotional landing page.",
  },
  {
    id: 5,
    title: "Landing Page SEO Optimization",
    description: "Improve search ranking of landing page.",
  },
  {
    id: 6,
    title: "Optimize Database Queries",
    description: "Improve DB query performance.",
  },
  {
    id: 7,
    title: "Database Index Review",
    description: "Check indexing for faster queries.",
  },
  {
    id: 8,
    title: "Mobile App UI Redesign",
    description: "Update UI for the mobile application.",
  },
  {
    id: 9,
    title: "Mobile App Navigation Update",
    description: "Improve in-app navigation experience.",
  },
  {
    id: 10,
    title: "Implement Authentication System",
    description: "Secure login and user access.",
  },
  {
    id: 11,
    title: "Testing and QA for v1.2",
    description: "Ensure quality and testing.",
  },
  {
    id: 12,
    title: "Create Admin Dashboard",
    description: "Build dashboard for admin control.",
  },
  {
    id: 13,
    title: "Deploy to Production Server",
    description: "Move system to live server.",
  },
  {
    id: 14,
    title: "User Feedback Survey Integration",
    description: "Collect feedback from users.",
  },
];

// interfaces
interface isearchquery {
  searchinputdata: string;
}
let searchQuery: isearchquery = {
  searchinputdata: "",
};

let filtereddata: object[] = [];

getsearchInput = (searchQuery: isearchquery) => {
  filtereddata = demoProjects.filter((data) =>
    data.title.toLowerCase().includes(searchQuery.searchinputdata.toLowerCase())
  );
  if (filtereddata) {
    getfilteredList();}

  searchQuery.searchinputdata = "";
};
handlesearinputchange = (e: Event) => {
  const { name, value } = e.target as EventTarget;
  searchQuery = { ...searchQuery, [name]: value };
};

getfilteredList = () => {
  filtereddata?.forEach((searchresults) => {
    let result = document.createElement("li") as HTMLElement;
    result.innerHTML = `<div class="checkbox"><i class="ri-check-double-line"></i></div>
             <div class="details">
              <p class="tasks-title">${searchresults?.title}</p>
              <p class="tasks-description">${searchresults?.description}</p>
            </div>`;
    searchResultContainer.firstElementChild?.appendChild(result);
  });
};
//  EventListeners  
searchField.addEventListener("change", handlesearinputchange);
searchIconBtn.addEventListener("click", () => {
  if (searchQuery.searchinputdata.trim() === "") {
    searchIconBtn.style.color = "red";
  } else {
    getsearchInput(searchQuery);
  }
});
