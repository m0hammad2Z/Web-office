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


const registrationForm = document.getElementById('registrationForm');
const fullNameInput = document.getElementById('fullName');
const fullNameError = document.getElementById('fullNameError');
const registerButton = document.getElementById('registerButton');

function validateFullName() {
    const fullName = fullNameInput.value.trim();

    
    const fullNameRegex1 = /\b[A-Z]/;
    const fullNameRegex2 = /([0-9]+|\W)/;
    const fullNameRegex3 = /([A-Z]{1}[a-z]+)/;

    if (fullName === '') {
        fullNameError.textContent = "Full name cannot be empty.";

        return false;
    }

    if (fullNameRegex3.test(fullName)) {
        fullNameError.textContent = "Full ";

        return false;
    }
    if (fullNameRegex2.test(fullName)) {
        fullNameError.textContent = "Invalid format it must be contains only letter";

        return false;
    }
    if (!fullNameRegex1.test(fullName)) {
        fullNameError.textContent = "Invalid full name. it must start with cappital lettert.";

        return false;
    }

    fullNameError.textContent = "";

    return true;
}
registrationForm.addEventListener('submit', function (event)
{
    event.preventDefault();

    if (validateFullName()) {

        alert("Form submitted successfully");
    }
});



