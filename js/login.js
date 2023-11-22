
import { general } from "./general.js";
let loginForm = document.querySelector('.form-Container');

loginForm.addEventListener('submit', function (event) {
    event.preventDefault();

    let email = document.getElementById('email').value;
    let password = document.getElementById('password').value;
    let user = validateUser(email, password);

    if (user) {
        window.location.href = `welcome.html`;
        general.WriteOnlocalStorage('registerd_user',JSON.stringify(user));

    } else {
        alert('Invalid credentials');
    }
});

function validateUser(email, password) {
    let storedData = JSON.parse(general.ReadFromlocalStorage('users')) ;
    return storedData.find((user) => user.email === email && user.password === password);
}
