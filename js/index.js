import { User } from "./models/models.js"
import { roles } from "./models/roles.js"

let user = new User(1, roles.admin, "Mohammad", "Al-Zaro", "imhamd@gk.com", "1234", new Date(), new Date(), "https://via.placeholder.com/150");
console.log(user.firstName);