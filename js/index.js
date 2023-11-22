import { User } from "./models/models.js";
import { general } from "./general.js";


let user = new User(1, general.roles.admin, "Mohammad", "Al-Zaro", "imhamd33@gk.com", "1234", new Date(), new Date(), "https://via.placeholder.com/150");
user.add();