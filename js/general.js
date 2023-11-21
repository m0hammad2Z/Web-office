async function ReadJson(path){
    let respones = await fetch(path);
    let data = respones.json();
    return data;
}

function WriteOnlocalStorage(key, json){
    localStorage.setItem(key, json);
}

function ReadFromlocalStorage(key){
    return localStorage.getItem(key);
}

let keysObj = {
    users: "users",
    students: "students",
    announcements: "announcements",
    todos: "todos",
    feedbacks: "feedbacks",
    news: "news"
}

let roles = {
    admin: 'admin',
    trainer : 'trainer',
    student: 'student'
}


let users = [];
let students = [];
let announcements = [];
let todos = [];
let feedbacks = [];
let news = [];



export let general = { ReadJson, WriteOnlocalStorage, ReadFromlocalStorage, roles, users, students, announcements, todos, feedbacks, news, keysObj};