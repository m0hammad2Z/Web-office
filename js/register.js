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

// const passwordInput = document.getElementById('password').value;
// function validatePassword () {
   
//     const passwordError = document.getElementById('passwordError');
//     const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d\W]{8,}$/;

//    if (!passwordRegex.test(passwordInput)) {
//         setErrorMsg(passwordError, 'Invalid password format');
//     } else {
//         successMsg(passwordError);
//     }
// }

// Mobile number Validation
const mobileInput = document.getElementById('mobile');
function validateMobile() {
    const mobileError = document.getElementById('mobileError');
    const mobileRegex = /^07[7-9]{1}[0-9]{7}$/;
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
