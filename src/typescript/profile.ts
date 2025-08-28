// Element Quering
const profilePhoto = document.querySelector(
  ".uploaded-Profile-photo"
) as HTMLImageElement;
const uploadBtn = document.querySelector(".btn") as HTMLButtonElement;
const nameForm = document.querySelector("input") as HTMLInputElement;
const uploadbtn = document.body.querySelector(".upload-btn") as HTMLElement;
const changeEmail = document.querySelector(".email-btn") as HTMLButtonElement;
const cancelBtn = document.querySelector(".cancelbtn") as HTMLButtonElement;
const uploadfield = document.querySelector(".uploadfield") as HTMLElement;
const savechangesBtn = document.body.querySelector(
  ".savechangesbtn"
) as HTMLElement;
const nameFormcontainer = document.body.querySelector(
  ".inputname-conatiner"
) as HTMLElement;

// hidden / Visible Password ;
const passwordInput = document.body.querySelector(
  ".password-inputfield"
) as HTMLInputElement;

const visibleIcon = document.body.querySelector(".ri-eye-line") as HTMLElement;
const passwordSaver = document.body.querySelector(
  ".password-validator"
) as HTMLElement;

const passwordInputContainer = document.body.querySelector(
  ".password-input-container"
) as HTMLElement;

// profile Updation
const ProfileUpdationContainer = document.body.querySelector(".profileupdated");

// Interfaces
interface Iprofile {
  image: string;
  username: string;
  password: string;
  emailaddress: string;
}
// global object for handling data;
let profiledetails: Iprofile = {
  image: "",
  username: "",
  password: "",
  emailaddress: "",
};
// Signatures
let handleCancel: () => void;
let Imagevalidator: (url: string) => boolean;
let handleSaveChanges: () => void;
let handleoformValidation: (data: Iprofile) => number;
let passwordShower: () => void;
// functions

passwordShower = () => {
  passwordInput.type = "text";
  let hiddenIcon = document.createElement("i") as HTMLElement;
  hiddenIcon.className = "ri-eye-off-line";
  visibleIcon.replaceWith(hiddenIcon);
  hiddenIcon.addEventListener("click", () => {
    passwordInput.type = "password";
    hiddenIcon.replaceWith(visibleIcon);
  });
};

handleCancel = () => {
  location.reload();
};

handleSaveChanges = () => {
  location.reload();
  localStorage.setItem("ProfileCredentials", JSON.stringify(profiledetails));
  window.location.reload();
};

handleoformValidation = (data: Iprofile): number => {
  if (data.image === "") {
    uploadBtn.style.border = "2px solid red";
  }
  if (data.emailaddress === "") {
    changeEmail.style.border = "2px solid red";
  }
  if (data.username === "") {
    nameForm.style.border = "2px solid red";
  }
  if (data.password === "") {
    passwordInput.style.border = "2px solid red";
  }
  if (data.password) {
    passwordInput.style.border = "0px solid red";
  }
  if (data.image) {
    profilePhoto.style.border = "0px solid red";
    uploadBtn.style.border = "0px solid red";
  }
  if (data.username) {
    nameForm.style.border = "0px solid red";
  }
  if (data.emailaddress) {
    changeEmail.style.border = "0px solid red";
  }
  if (data.image && data.username && data.password && data.emailaddress) {
    return 1;
  }
};

//Event listeners
// Upload Profile Photo
uploadBtn.addEventListener("click", () => {
  const uploadInput = document.createElement("input");
  uploadInput.type = "text";
  uploadInput.placeholder = "please paste url of Image";

  const tick = document.createElement("i");
  tick.classList.add("ri-send-plane-line");

  const uploadField = document.createElement("div");
  uploadField.appendChild(uploadInput);
  uploadField.appendChild(tick);
  uploadBtn.replaceWith(uploadField);

  Imagevalidator = (url: string) => {
    try {
      const parsed = new URL(url);
      return (
        /^https?:/.test(parsed.protocol) &&
        /\.(jpg|jpeg|png|gif|webp|svg)(\?.*)?$/.test(parsed.pathname)
      );
    } catch {
      return false;
    }
  };

  tick.addEventListener("click", () => {
    const imgURL = uploadInput.value;
    if (!Imagevalidator(imgURL)) {
      alert("Invalid image URL format.");
      return;
    }
    profiledetails.image = imgURL;
    profilePhoto.src = imgURL;
    uploadbtn.remove();
  });
});

// NameChanging
nameForm.addEventListener("click", () => {
  const saveName = document.body.querySelector(
    ".ri-send-plane-line"
  ) as HTMLElement;
  saveName.addEventListener("click", () => {
    if (nameForm) {
      const usernameHolder = document.createElement("p");
      usernameHolder.classList.add("usernameholder");
      usernameHolder.innerText = nameForm.value;
      profiledetails.username = usernameHolder.innerText;
      nameForm.replaceWith(usernameHolder);
      saveName.replaceChildren("")
    }
  });
});

passwordInput.addEventListener("click", () => {
  passwordSaver.addEventListener("click", () => {
    const password = passwordInput.value;
    if (password) {
      profiledetails.password = password;
      const passwordHolder = document.createElement(
        "p"
      ) as HTMLParagraphElement;
      passwordHolder.innerText = password;
      passwordInputContainer.replaceWith(passwordHolder);
    }
  });
});
// EmailChanging
const changeEmailfield = document.createElement("input");
const changeEmailtext = document.createElement("p");
const saveEmailbtn = document.createElement("div");
saveEmailbtn.classList.add(".email-btn");
changeEmailtext.classList.add("savechangesbtn");
changeEmailtext.innerHTML = `<i class="ri-database-2-line"></i> Save Changes`;
saveEmailbtn.appendChild(changeEmailtext);

changeEmail.addEventListener("click", () => {
  changeEmail.replaceWith(saveEmailbtn);
  const emailAdd = document.body.querySelector(".emailadd") as HTMLElement;
  const curmail = emailAdd.innerText;
  emailAdd.replaceWith(changeEmailfield);
  changeEmailfield.value = curmail;
  saveEmailbtn.addEventListener("click", () => {
    emailAdd.innerText = changeEmailfield.value;
    profiledetails.emailaddress = emailAdd.innerText;
    changeEmailfield.replaceWith(emailAdd);
    saveEmailbtn.replaceWith(changeEmail);
  });
});

cancelBtn.addEventListener("click", handleCancel);
savechangesBtn.addEventListener("click", () => {
  if (handleoformValidation(profiledetails)) {
    handleSaveChanges();
    // profile Updation
    let updationMessage = document.createElement("p");
    updationMessage.classList.add("updation-message");
    updationMessage.innerHTML = `<img src = "https://i.pinimg.com/originals/0c/a2/a5/0ca2a5738a404e7800ee1f93dab9676a.gif"></img> Profile is successfully updated `;
    if (!ProfileUpdationContainer?.firstElementChild) {
      ProfileUpdationContainer?.appendChild(updationMessage);
    }
  }
});

visibleIcon.addEventListener("click", passwordShower);

// complete Profile
const fetchedProfiledata = localStorage.getItem("ProfileCredentials");
const profileFetched = JSON.parse(fetchedProfiledata);
const ProfileContainer = document.body.querySelector(
  ".profile-container"
) as HTMLElement;
if(profileFetched){
  ProfileContainer.innerHTML = `<div class="heading">
         <img src="https://assets-v2.lottiefiles.com/a/d4f46ebe-1180-11ee-a47a-d34b68ca717c/X1wAcRAuX0.gif" alt="" class="imagealongwithptofile">
        <p>Profile</p>
      </div>
      <div class="profile-photo">
        <i class="ri-image-line"></i>
        <p class="subheading"> Profile photo</p>
        <img
          src=${profileFetched.image}
          alt=""
          class="uploaded-Profile-photo"
        />
      </div>
      <div class="username">
        <p class="subheading"><i class="ri-user-line"></i> Username</p>
        <div class="fullname">
        <p>${profileFetched.username}</p>
        </div>
      </div>
      <div class="password">
        <p class="subheading"><i class="ri-lock-password-line"></i> Password</p>
        <div class="encrypted-password">
          <p>${profileFetched.password}</p>
        </div>
      </div>
      <div class="emailaddress">
       
        <p class="subheading"> <i class="ri-mail-ai-line"></i> E-mail Address</p>
        <div class="changeaddress">
          <div class="emailcontainer">
            <p class="emailadd">${profileFetched.emailaddress}</p>
            <i class="ri-send-plane-line"></i>
          </div>
        </div>
      </div>
      <div class="delete-account-option">
       <p><i class="ri-delete-bin-line"></i> Delete Account</p>
      </div>`;
};
const deleteAccount = document.body.querySelector(".delete-account-option") as HTMLElement;
deleteAccount.addEventListener("click",()=>{
 localStorage.removeItem("ProfileCredentials");
 location.reload();
 window.location.reload();
})
