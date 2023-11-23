import { User } from "./models/models.js";
import { general } from "./general.js";


//data
let registerd_user;
function LoadData() {
     registerd_user = JSON.parse(general.ReadFromlocalStorage('registerd_user')) || new User(-1, general.roles.guest, "Guest", "", "", "", new Date(), new Date(), "", "");
   
     //DOM
    let sidebarUserName = document.getElementById('sidebar-user-name'); 
    let sidebarRole = document.getElementById('sidebar-role'); 
    let sidebarLogout = document.getElementById('sidebar-logout'); 
    let sidebareProfile =  document.getElementById('sidebare-profile'); 

    sidebarUserName.textContent = registerd_user.firstName + " " + registerd_user.lastName;
    sidebarRole.textContent = registerd_user.role.toUpperCase();
    sidebarLogout.style.cursor = "pointer"
    sidebarLogout.addEventListener('click', ()=>{
        localStorage.removeItem('registerd_user');
        location.reload();
    })
    sidebareProfile.addEventListener('click', ()=>{
        location.href = "../html/profile.html";
    })
}
LoadData();


// Design

let sidebarFlag = false;
let sidebarContainer = document.querySelector('.sidebar-container');
sidebarContainer.style.transform = 'translate(95%)';
sidebarContainer.addEventListener('click', ()=>{
    if(!sidebarFlag){
        sidebarContainer.style.transform = 'translate(95%)';
        sidebarFlag = true;
        console.log(sidebarFlag)
    } else{
        sidebarContainer.style.transform = 'translate(0)';
        sidebarFlag = false
        console.log(sidebarFlag)
    };
});