// Element Query
let searchResultContainer = document.body.querySelector(
  ".search-results"
) as HTMLElement;
// signatures
let getfilteredList: () => void;

let searchData = localStorage.getItem("tasks");
let searchedData = JSON.parse(searchData);
let filtereddata: object[] = [];
let getsearchInput = (searchQuery: string) => {
  filtereddata = searchedData?.filter((data) =>
    data.tasktitle.toLowerCase().includes(searchQuery?.toLowerCase())
  );
  if (filtereddata) {
    getfilteredList();
  }
};

getfilteredList = () => {
  filtereddata?.forEach((searchresults) => {
    let result = document.createElement("li") as HTMLElement;
    result.innerHTML = `
             <div class="details">
              <div><img src="https://cdn-icons-png.flaticon.com/512/861/861627.png" class="search-icon">
              <p class="tasks-title">${searchresults?.tasktitle} - </p>
              <p class="tasks-description"> ${searchresults?.taskdes}</p></div>
              <div><img src="https://cdn-icons-png.flaticon.com/512/8564/8564010.png" class="searchdelete-icon"></div>
            </div>`;
    searchResultContainer.firstElementChild?.appendChild(result);

    // clear Searches
 xconst clearSearch = document.body.querySelector(".searchdelete-icon") as HTMLElement;
 clearSearch.addEventListener("click",()=>{
  localStorage.removeItem("searchquery");
})
  });
  if (filtereddata.length <= 0) {
    const noresult = document.createElement("li");
    noresult.classList.add("notaskfound");
    noresult.innerHTML = `<img src="https://cdn-icons-png.flaticon.com/512/2748/2748558.png"></img><p class="notask-found">No Task Found</p>`;
    searchResultContainer.firstElementChild?.appendChild(noresult);
    if (filtereddata.length >= 1) {
      noresult.remove();
    }
  }

};

let search = localStorage.getItem("searchquery");
if (search) {
  getsearchInput(search);
}
