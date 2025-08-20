"use strict";
// Element quering
let logoutSection = document.body.querySelector(".logout-section");
let profileInfo = document.body.querySelector(".profile-detail");
// global object
let profileData = {
    username: "",
    img: "",
    email: "",
};
// signatures
let GetCredentials;
let SetCredentials;
let loggedOut;
//functions
SetCredentials = (data) => {
    if (localStorage.getItem("ProfileCredentials")) {
        profileInfo.innerHTML = `<ul>
       <div class="logout-section-heading"><p>Do you want to logout ?</p></div>
          <li>
             <img src="${data === null || data === void 0 ? void 0 : data.image}" />
          </li>
          <li class="Username">
            <i class="ri-user-line"></i>
            <p>Username:</p>
            <p class="username">${data.username}</p>
          </li>
          <li class="Passord">
            <i class="ri-key-line"></i>
            <p>Passord:</p>
           <p class="password">${data.password}</p> 
          </li>
          <li><button><i class="ri-door-open-line"></i> Log out</button></li>
        </ul>`;
        let logOutbtn = document.body.querySelector("button");
        logOutbtn.addEventListener("click", () => {
            loggedOut();
        });
    }
    else {
        profileInfo.innerHTML = ` <div class="logged-screen">
      <p>You are not logged in !</p>
      <img src="https://assets-v2.lottiefiles.com/a/e5d64090-1171-11ee-81f7-57cf563b5846/tZhgVchaxs.gif" alt="">
    </div>`;
    }
    // if (
    //   profilephoto.src !== "https://img.freepik.com/premium-photo/fun-unique-cartoon-profile-picture-that-represents-your-style-personality_1283595-14213.jpg"
    // ) {
    //   profilephoto.src = data.img;
    // }
    // userName.innerText = data.username;
    // password.innerText = data.password;
};
GetCredentials = () => {
    let profilecredential = localStorage.getItem("ProfileCredentials");
    profileData = JSON.parse(profilecredential);
    SetCredentials(profileData);
};
loggedOut = () => {
    logoutSection.innerHTML = ` <div class="logged-screen">
      <p>You are successfully logged out !</p>
      <img src="https://cdn-icons-gif.flaticon.com/17905/17905745.gif" alt="">
    </div>`;
    localStorage.removeItem("ProfileCredentials");
};
// Event Listeners
window.addEventListener("DOMContentLoaded", GetCredentials);
