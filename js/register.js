import { Announcement, Student, User } from "./models/models.js";
import { general } from "./general.js";



let registerd_user;
function LoadData() {
    general.users = JSON.parse(general.ReadFromlocalStorage(general.keysObj.users)) || [];
    general.students = JSON.parse(general.ReadFromlocalStorage(general.keysObj.students)) || [];
    general.announcements = JSON.parse(general.ReadFromlocalStorage(general.keysObj.announcements)) || [];
    general.news = general.ReadJson('../data/news.json') || [];
    general.todos = JSON.parse(general.ReadFromlocalStorage(general.keysObj.todos)) || [];
    registerd_user = JSON.parse(general.ReadFromlocalStorage('registerd_user')) || new User(-1, general.roles.guest, "Guest", "", "", "", new Date(), new Date(), "", "");
}
LoadData();

general.RedirectIfNotAuthorized([general.roles.admin], registerd_user,'../index.html')


const firstNameInput = document.getElementById('firstName');
// first name validation
function validateFirstName() {
    const firstNameError = document.getElementById('firstNameError');
    const nameRegex1 = /\b[A-Z]/;
    const nameRegex2 = /\d/;
    const nameRegex3 = /\s/;
    const nameRegex4 = /^[A-Z]{1}[a-z]{1,}$/;
     if (nameRegex3.test(firstNameInput.value)) {
        setErrorMsg(firstNameError, 'not allowed to contain space');

    }
    else if (!nameRegex1.test(firstNameInput.value)) {
        setErrorMsg(firstNameError, 'Should start with a capital letter');
    } else if (nameRegex2.test(firstNameInput.value)) {
        setErrorMsg(firstNameError, 'Should not  contain a number');
     }
         else if (!nameRegex4.test(firstNameInput.value)) {
        setErrorMsg(firstNameError, 'Invalid name format');
    }
    else {
        successMsg(firstNameError);
    }
}

// last name validation
const lastNameInput = document.getElementById('lastName');
function validateLastName() {
   
    const lastNameError = document.getElementById('lastNameError');
    const nameRegex1 = /\b[A-Z]/;
    const nameRegex2 = /\d/;
    const nameRegex3 = /\s/;
    const nameRegex4 = /^[A-Z]{1}[a-z]{1,}$/;
     if (nameRegex3.test(lastNameInput.value)) {
        setErrorMsg(lastNameError, 'not allowed to contain space');
    }
    else if (!nameRegex1.test(lastNameInput.value)) {
        setErrorMsg(lastNameError, 'Should start with a capital letter');
     }else if (lastNameInput.value==="") {
         lastNameError.innerHTML = "";
    } 
     else if (nameRegex2.test(lastNameInput.value)) {
        setErrorMsg(lastNameError, 'Should not  contain a number');
     }
         else if (!nameRegex4.test(lastNameInput.value)) {
        setErrorMsg(lastNameError, 'Invalid name format');
    }
    else {
        successMsg(lastNameError);
    }
}

// validate email
const emailInput = document.getElementById('email');
function validateEmail() {
    const emailError = document.getElementById('emailError');
    const emailRegex = /^[a-zA-Z][a-zA-Z0-9\W^\.]{2,64}@[a-zA-Z0-9]+\.([a-zA-Z0-9]+){2,}$/;

     if (!emailRegex.test(emailInput.value)) {
        setErrorMsg(emailError, 'Invalid email format');
    } else {
        successMsg(emailError);
    }
}

// Password Validation

const passwordInput = document.getElementById('password').value;
function validatePassword () {
   
    const passwordError = document.getElementById('passwordError');
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/;

   if (!passwordRegex.test(passwordInput)) {
        setErrorMsg(passwordError, 'Invalid password format');
    } else {
        successMsg(passwordError);
    }
}

// Mobile number Validation
const mobileInput = document.getElementById('mobile');
function validateMobile() {
    const mobileError = document.getElementById('mobileError');
    const mobileRegex = /\d/;
    const mobileRegex2 = /\D/;

     if (!mobileRegex.test(mobileInput.value)) {
        setErrorMsg(mobileError, 'Should not  contain a letter');
     } else if (mobileRegex2.test(mobileInput.value)) {
        setErrorMsg(mobileError, '');
     }
     else {
        successMsg(mobileError);
    }
}

function setErrorMsg(element, message) {
    element.textContent = message;
    element.style.color = 'red';
}

function successMsg(element) {
    element.textContent = '';
}


// Register
const registerBtn = document.getElementById('registerButton');
registerBtn.addEventListener('click', (e)=>{
    e.preventDefault();
    const firstName = document.getElementById('firstName').value;
    const lastName = document.getElementById('lastName').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const mobile = document.getElementById('mobile').value;
    const role = general.roles.trainer;
    const birthDate = document.getElementById('birthDate').value;
    let largerID = general.users.reduce((max, user) => max.id > user.id ? max : user).id;
    const ru = new User(Number(largerID) + 1, role, firstName, lastName, email, password, birthDate, new Date(), mobile, "");
    ru.add();
    alert("User Added Successfully");
});
