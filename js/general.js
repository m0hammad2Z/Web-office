import {
  User,
  Announcement,
  Student,
  Todo,
  Feedback,
} from "./models/models.js";

async function ReadJson(path) {
  let respones = await fetch(path);
  let data = respones.json();
  return data;
}

function WriteOnlocalStorage(key, json) {
  localStorage.setItem(key, json);
}

function ReadFromlocalStorage(key) {
  return localStorage.getItem(key);
}

let keysObj = {
  users: "users",
  students: "students",
  announcements: "announcements",
  todos: "todos",
  feedbacks: "feedbacks",
  news: "news",
};

let roles = {
  admin: "admin",
  trainer: "trainer",
  student: "student",
  guest: "guest",
};

let users = [];
let students = [];
let announcements = [];
let todos = [];
let feedbacks = [];
let news = [];

function SetSomeDataIfThereIsNo() {
  if (!localStorage.getItem(keysObj.users)) {
    for (let i = 1; i < 2; i++) {
      let r = roles.admin;
      let user = new User(
        i,
        r,
        "Mohammad",
        "Al-Zaro",
        "imhamd33@gk.com",
        "1234",
        new Date(),
        new Date(),
        "https://via.placeholder.com/150",
        "07949854994"
      );
      user.add();
    }
    WriteOnlocalStorage(keysObj.users, JSON.stringify(users));
  }
  // if(!localStorage.getItem(keysObj.students)){
  //     for(let i = 1; i <= 10; i++){
  //         let student = new Student(i, "Mohammad", "Al-Zaro", "x@x.x", "1234", new Date(), 1 , "07949854994", "https://via.placeholder.com/150", 0, 0, 0, [], []);
  //         student.add();
  //     }
  //     WriteOnlocalStorage(keysObj.students, JSON.stringify(students));
  // }
  if (!localStorage.getItem(keysObj.announcements)) {
    for (let i = 1; i <= 4; i++) {
      let announcement = new Announcement(i, "Title", "Description", 1);
      announcement.add();
    }

    // if(!localStorage.getItem(keysObj.todos)){
    //     for(let i = 1; i <= 4; i++){
    //         let todo = new Todo([1,2,3], "Title", "Description", 1);
    //         todo.add();
    //     }
    //     WriteOnlocalStorage(keysObj.todos, JSON.stringify(todos));
    // }
    if(!localStorage.getItem(keysObj.feedbacks)){
        feedbacks =[];
    }
    if(!localStorage.getItem(keysObj.news)){
        WriteOnlocalStorage(keysObj.news, JSON.stringify(news));

    }
    WriteOnlocalStorage(keysObj.feedbacks, JSON.stringify(feedbacks));
  }
  if (!localStorage.getItem(keysObj.news)) {
    WriteOnlocalStorage(keysObj.news, JSON.stringify(news));
  }
}

function RedirectIfNotAuthorized(rolesAllowed, registerd_user, path) {
  for (let role of rolesAllowed) {
    if (role == registerd_user.role) {
      return;
    }
  }
  window.location.href = path;
}

export let general = {
  RedirectIfNotAuthorized,
  SetSomeDataIfThereIsNo,
  ReadJson,
  WriteOnlocalStorage,
  ReadFromlocalStorage,
  roles,
  users,
  students,
  announcements,
  todos,
  feedbacks,
  news,
  keysObj,
};
