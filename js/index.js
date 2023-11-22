import { Announcement, Student, User } from "./models/models.js";
import { general } from "./general.js";


// let registerd_user;
function LoadData() {
    general.users = JSON.parse(general.ReadFromlocalStorage(general.keysObj.users))
    general.students = JSON.parse(general.ReadFromlocalStorage(general.keysObj.students))
    general.announcements = JSON.parse(general.ReadFromlocalStorage(general.keysObj.announcements))
    registerd_user = general.ReadFromlocalStorage('registerd_user') || null;
}

// LoadData();

// let r = (Math.floor(Math.random() * 100)) % 2 == 0 ? general.roles.admin : general.roles.trainer;
// let user = new User(1, r, "Mohammad", "Al-Zaro", "imhamd33@gk.com", "1234", new Date(), new Date(), "https://via.placeholder.com/150");
// user.add();

// for(let i = 0; i < 100; i++){
//     let r = (Math.floor(Math.random() * 100)) % 2 == 0 ? general.roles.admin : general.roles.trainer;
//     let user = new User(1, r, "Mohammad", "Al-Zaro", "imhamd33@gk.com", "1234", new Date(), new Date(), "https://via.placeholder.com/150");
//     user.add();
// }


// for(let i = 0; i < 100; i++){
//     let student = new Student(1, "Mohammad", "Al-Zaro", "imhgamf@gj", "1234", new Date(), 1, "https://via.placeholder.com/150");
//     student.add();
// }


// let announcement = new Announcement(1, "Announcement title", "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.", 1);
// announcement.add();
// let announcement2 = new Announcement(1, "Announcement title", "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.", 1);
// announcement2.add();