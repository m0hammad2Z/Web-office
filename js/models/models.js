import { general } from "../general.js";

export function User(
  id,
  role,
  firstName,
  lastName,
  email,
  password,
  hiringDate,
  birthDate,
  imgURl,
  mobile
) {
  this.id = id;
  this.role = role;
  this.firstName = firstName;
  this.lastName = lastName;
  this.email = email;
  this.password = password;
  this.hiringDate = hiringDate;
  this.birthDate = birthDate;
  this.imgURl = imgURl;
  this.mobile = mobile;

  this.add = function () {
    let index = general.users.findIndex((o)=>this.id==o.id)
    if(index != -1) return;
    general.users.push(this);
    general.WriteOnlocalStorage(
      general.keysObj.users,
      JSON.stringify(general.users)
    );
  };

  this.delete = function () {
    let index = general.users.findIndex((user) => user.id == this.id);
    if(index == -1) return;
    general.users.splice(index, 1);
    general.WriteOnlocalStorage(
      general.keysObj.users,
      JSON.stringify(general.users)
    );
  };

  this.update = function () {
    let index = general.users.findIndex((user) => user.id == this.id);
    if(index == -1) return;
    general.users[index] = this;
    general.WriteOnlocalStorage(
      general.keysObj.users,
      JSON.stringify(general.users)
    );
  };
}

export function Feedback(id, student_id, title, description, createdBy) {
  this.id = id;
  this.student_id = student_id;
  this.title = title;
  this.description = description;
  this.createdBy = createdBy;

  this.add = function () {
    let index = general.feedbacks.findIndex((o)=>this.id==o.id)
    if(index != -1) return;
    general.feedbacks.push(this);
    general.WriteOnlocalStorage(
      general.keysObj.feedbacks,
      JSON.stringify(general.feedbacks)
    );
  };

  this.delete = function () {
    let index = general.feedbacks.findIndex(
      (feedback) => feedback.id == this.id
    );
    if(index == -1) return;
    general.feedbacks.splice(index, 1);
    general.WriteOnlocalStorage(
      general.keysObj.feedbacks,
      JSON.stringify(general.feedbacks)
    );
  };

  this.update = function () {
    let index = general.feedbacks.findIndex(
      (feedback) => feedback.id == this.id
    );
    if(index == -1) return;
    general.feedbacks[index] = this;
    general.WriteOnlocalStorage(
      general.keysObj.feedbacks,
      JSON.stringify(general.feedbacks)
    );
  };
}

export function Student(
  id,
  firstName,
  lastName,
  email,
  password,
  birthDate,
  team_leader_id,
  mobile,
  imgUrl,
  rate,
  absence,
  tasks,
  doneTasks,
  feedbacks
) {
  this.id = id;
  this.firstName = firstName;
  this.lastName = lastName;
  this.email = email;
  this.password = password;
  this.birthDate = birthDate;
  this.team_leader_id = team_leader_id;
  this.mobile = mobile;
  this.imgUrl = imgUrl;
  this.rate = rate;
  this.absence = absence;
  this.doneTasks = parseInt(doneTasks, 10) || 0;
  this.tasks = tasks;
  this.feedbacks = feedbacks;

  this.add = function () {
    let index = general.students.findIndex((o)=>this.id==o.id)
    if(index != -1) return;
    general.students.push(this);
    general.WriteOnlocalStorage(
      general.keysObj.students,
      JSON.stringify(general.students)
    );
  };

  this.delete = function () {
    let index = general.students.findIndex((student) => student.id == this.id);
    if(index == -1) return;
    general.students.splice(index, 1);
    general.WriteOnlocalStorage(
      general.keysObj.students,
      JSON.stringify(general.students)
    );
  };

  this.update = function () {
    let index = general.students.findIndex((student) => student.id == this.id);
    if(index == -1) return;
    general.students[index] = this;
    general.WriteOnlocalStorage(
      general.keysObj.students,
      JSON.stringify(general.students)
    );
  };
}

export function Todo(students_ids, title, description, createdBy) {
  this.students_ids = students_ids;
  this.title = title;
  this.description = description;
  this.createdBy = createdBy;

  this.add = function () {
    let index = general.todos.findIndex((o)=>this.id==o.id)
    // if(index != -1) return;
    general.todos.push(this);
    general.WriteOnlocalStorage(
      general.keysObj.todos,
      JSON.stringify(general.todos)
    );
  };

  this.delete = function () {
    let index = general.todos.findIndex((todo) => todo.id == this.id);
    general.todos.splice(index, 1);
    general.WriteOnlocalStorage(
      general.keysObj.todos,
      JSON.stringify(general.todos)
    );
  };

  this.update = function () {
    let index = general.todos.findIndex((todo) => todo.id == this.id);
    general.todos[index] = this;
    general.WriteOnlocalStorage(
      general.keysObj.todos,
      JSON.stringify(general.todos)
    );
  };
}

export function Announcement(id, title, description, createdBy) {
  this.id = id;
  this.title = title;
  this.description = description;
  this.createdBy = createdBy;

  this.add = function () {
    let index = general.users.findIndex((o)=>this.id==o.id)
    if(index != -1) return;
    general.announcements.push(this);
    general.WriteOnlocalStorage(
      general.keysObj.announcements,
      JSON.stringify(general.announcements)
    );
  };

  this.delete = function () {
    let index = general.announcements.findIndex(
      (announcement) => announcement.id == this.id
    );
    if(index == -1) return;
    general.announcements.splice(index, 1);
    general.WriteOnlocalStorage(
      general.keysObj.announcements,
      JSON.stringify(general.announcements)
    );
  };

  this.update = function () {
    if(index == -1) return;
    let index = general.announcements.findIndex(
      (announcement) => announcement.id == this.id
    );
    general.announcements[index] = this;
    general.WriteOnlocalStorage(
      general.keysObj.announcements,
      JSON.stringify(general.announcements)
    );
  };
}
