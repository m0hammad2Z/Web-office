import { User } from "./models/models.js";
import { general } from "./general.js";


document
  .querySelector(".saveChangesButton")
  .addEventListener("click", function () {
    console.log("test");
    let firstName = document.getElementById("userFirstNameInput").value;
    let lastName = document.getElementById("userLastNameInput").value;
    let email = document.getElementById("userEmailInput").value;
    let password = registerd_user.password;
    let role = registerd_user.role;
    let id = registerd_user.id;
    let user = new User(
      id,
      role,
      firstName,
      lastName,
      email,
      password,
      new Date(),
      new Date(),
      "",
      ""
    );
    location.reload();
    const isConfirmed = window.confirm(
      "Are you sure you want to save changes?"
    );
    if (isConfirmed) {
      user.update();
      general.WriteOnlocalStorage("registerd_user", JSON.stringify(user));
      document.getElementById("UserProfileForm").style.display = "none";
      LoadData1();
    }
  });

let registerd_user;
function LoadData() {
  general.users =
    JSON.parse(general.ReadFromlocalStorage(general.keysObj.users)) || [];
  registerd_user =
    JSON.parse(general.ReadFromlocalStorage("registerd_user")) ||
    new User(
      -1,
      general.roles.guest,
      "Guest",
      "",
      "",
      "",
      new Date(),
      new Date(),
      "",
      ""
    );

  document.getElementById("userFirstNameInput").value =
    registerd_user.firstName;
  document.getElementById("userLastNameInput").value = registerd_user.lastName;
  document.getElementById("userEmailInput").value = registerd_user.email;
}
LoadData();

general.RedirectIfNotAuthorized(
  [general.roles.admin, general.roles.trainer],
  registerd_user,
  "../html/login.html"
);

// LoadData();
// function LoadData1() {
//   registerd_user = JSON.parse(general.ReadFromlocalStorage("registerd_user"));
//   document.getElementById("userFirstName").innerHTML = registerd_user.firstName;
//   document.getElementById("userLastName").innerHTML = registerd_user.lastName;
//   document.getElementById("userEmail").innerHTML = registerd_user.email;
// }
// LoadData1();

function showEdit() {
  document.getElementById("UserProfileForm").style.display = "block";
}

document.addEventListener("click", function (event) {
  if (event.target.classList.contains("edit-btn")) {
    showEdit();
  }
});
