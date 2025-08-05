// Element Quering
const profilePhoto = document.querySelector("img") as HTMLImageElement;
const uploadBtn = document.querySelector(".btn") as HTMLButtonElement;
const nameForm = document.querySelector("input") as HTMLInputElement;
const uploadbtn = document.body.querySelector(".upload-btn") as HTMLElement;
const changeEmail = document.querySelector(".email-btn") as HTMLButtonElement;
const cancelBtn = document.querySelector(".cancelbtn") as HTMLButtonElement;
const uploadfield = document.querySelector(".uploadfield") as HTMLElement;
const savechangesBtn = document.body.querySelector(".savechangesbtn") as HTMLElement;
const nameFormcontainer = document.body.querySelector(
  ".inputname-conatiner"
) as HTMLElement;

// Interfaces
interface Iprofile {
  image: string;
  username: string;
  emailaddress: string;
}
// global object for handling data;
let profiledetails: Iprofile = {
  image: "",
  username: "",
  emailaddress: "",
};
// Signatures
let handleCancel: () => void;
let Imagevalidator: (url: string) => boolean;
let handleSaveChanges: () => void;
let handleoformValidation:(data:Iprofile) => number ;

// functions
handleCancel = () => {
  const orgimg =
    "https://img.freepik.com/premium-photo/fun-unique-cartoon-profile-picture-that-represents-your-style-personality_1283595-14213.jpg";
  profilePhoto.src = orgimg;
  profilePhoto.insertAdjacentElement("afterend", uploadbtn);
  // // Name
  const username = document.body.querySelector(
    ".usernameholder"
  ) as HTMLElement;
  username.replaceWith(nameForm);
  // // Email
  const emailAdd = document.body.querySelector(".emailadd") as HTMLElement;
  emailAdd.innerText = "john.deere@gmail.com";
};

handleSaveChanges = () => {
 localStorage.setItem("ProfileCredentials",JSON.stringify(profiledetails));
};

handleoformValidation = (data:Iprofile) : number => {
   if(data.image === ""){
    profilePhoto.style.border = "2px solid red";
    uploadBtn.style.border = "2px solid red";
   }
   if(data.emailaddress === ""){
      changeEmail.style.border = "2px solid red";
   }
   if(data.username === ""){
    nameForm.style.border = "2px solid red";
   }
   if(data.image){
     profilePhoto.style.border = "0px solid red";
    uploadBtn.style.border = "0px solid red";
   }
   if(data.username){
     nameForm.style.border = "0px solid red";
   }
   if(data.emailaddress){
     changeEmail.style.border = "0px solid red";
   }
   if(data.image && data.username && data.emailaddress){
    return 1;
   }
}

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
    if (nameForm?.innerText === "") {
      const usernameHolder = document.createElement("p");
      usernameHolder.classList.add("usernameholder");
      usernameHolder.innerText = nameForm.value;
      profiledetails.username = usernameHolder.innerText;
      nameForm.replaceWith(usernameHolder);
      saveName.remove();
    }
  });
});

// EmailChanging
const changeEmailfield = document.createElement("input");
const changeEmailtext = document.createElement("p");
const saveEmailbtn = document.createElement("div");
saveEmailbtn.classList.add(".email-btn");
changeEmailtext.innerText = "save changes";
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
savechangesBtn.addEventListener("click",()=>{
  if( handleoformValidation(profiledetails)){
     handleSaveChanges();
  }
});
