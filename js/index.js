import { User } from "./models/models.js";
import { general } from "./general.js";

let user = new User(1, general.roles.admin, "Mohammad", "Al-Zaro", "imhamd@gk.com", "1234", new Date(), new Date(), "https://via.placeholder.com/150");
user.add();

let user2 = new User(2, general.roles.admin, "Mohammad", "Al-Zaro", "dlksa", "imdfsma", "1234", new Date(), new Date(), "https://via.placeholder.com/150");
user2.add();

general.users.forEach(user => console.log(user));
let userx = new User(2, general.roles.trainer, "Mohammad", "Al-Zaro", "dlksa", "imdfsmda@dsaa", "1234567890", new Date(), new Date(), "https://via.placeholder.com/150");
userx.update();
general.users.forEach(user => console.log(user));
userx.delete();
general.users.forEach(user => console.log(user));