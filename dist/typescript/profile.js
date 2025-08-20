"use strict";
// Element Quering
const profilePhoto = document.querySelector("img");
const uploadBtn = document.querySelector(".btn");
const nameForm = document.querySelector("input");
const uploadbtn = document.body.querySelector(".upload-btn");
const changeEmail = document.querySelector(".email-btn");
const cancelBtn = document.querySelector(".cancelbtn");
const uploadfield = document.querySelector(".uploadfield");
const savechangesBtn = document.body.querySelector(".savechangesbtn");
const nameFormcontainer = document.body.querySelector(".inputname-conatiner");
// hidden / Visible Password ;
const passwordInput = document.body.querySelector(".password-inputfield");
const visibleIcon = document.body.querySelector(".ri-eye-line");
const passwordSaver = document.body.querySelector(".password-validator");
const passwordInputContainer = document.body.querySelector(".password-input-container");
// global object for handling data;
let profiledetails = {
    image: "",
    username: "",
    password: "",
    emailaddress: "",
};
// Signatures
let handleCancel;
let Imagevalidator;
let handleSaveChanges;
let handleoformValidation;
let passwordShower;
// functions
passwordShower = () => {
    passwordInput.type = "text";
    let hiddenIcon = document.createElement("i");
    hiddenIcon.className = "ri-eye-off-line";
    visibleIcon.replaceWith(hiddenIcon);
    hiddenIcon.addEventListener("click", () => {
        passwordInput.type = "password";
        hiddenIcon.replaceWith(visibleIcon);
    });
};
handleCancel = () => {
    const orgimg = "https://img.freepik.com/premium-photo/fun-unique-cartoon-profile-picture-that-represents-your-style-personality_1283595-14213.jpg";
    profilePhoto.src = orgimg;
    profilePhoto.insertAdjacentElement("afterend", uploadbtn);
    // // Name
    const username = document.body.querySelector(".usernameholder");
    username.replaceWith(nameForm);
    // // Email
    const emailAdd = document.body.querySelector(".emailadd");
    emailAdd.innerText = "john.deere@gmail.com";
};
handleSaveChanges = () => {
    localStorage.setItem("ProfileCredentials", JSON.stringify(profiledetails));
};
handleoformValidation = (data) => {
    if (data.image === "") {
        profilePhoto.style.border = "2px solid red";
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
    Imagevalidator = (url) => {
        try {
            const parsed = new URL(url);
            return (/^https?:/.test(parsed.protocol) &&
                /\.(jpg|jpeg|png|gif|webp|svg)(\?.*)?$/.test(parsed.pathname));
        }
        catch (_a) {
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
    const saveName = document.body.querySelector(".ri-send-plane-line");
    saveName.addEventListener("click", () => {
        if (nameForm) {
            const usernameHolder = document.createElement("p");
            usernameHolder.classList.add("usernameholder");
            usernameHolder.innerText = nameForm.value;
            profiledetails.username = usernameHolder.innerText;
            nameForm.replaceWith(usernameHolder);
            saveName.remove();
        }
    });
});
passwordInput.addEventListener("click", () => {
    passwordSaver.addEventListener("click", () => {
        const password = passwordInput.value;
        if (password) {
            profiledetails.password = password;
            const passwordHolder = document.createElement("p");
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
changeEmailtext.innerText = "save changes";
saveEmailbtn.appendChild(changeEmailtext);
changeEmail.addEventListener("click", () => {
    changeEmail.replaceWith(saveEmailbtn);
    const emailAdd = document.body.querySelector(".emailadd");
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
    }
});
visibleIcon.addEventListener("click", passwordShower);
