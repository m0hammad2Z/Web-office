import { general } from "../general.js";

export function User(id, role, firstName, lastName, email, password, hiringDate, birthDate, imgURl, mobile){
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

    this.add = function(){
        general.users.push(this);
        general.WriteOnlocalStorage(general.keysObj.users, JSON.stringify(general.users));
    }

    this.delete = function(){
        let index = general.users.findIndex(user => user.id == this.id);
        general.users.splice(index, 1);
        general.WriteOnlocalStorage(general.keysObj.users, JSON.stringify(general.users));
    }

    this.update = function(){
        let index = general.users.findIndex(user => user.id == this.id);
        general.users[index] = this;
        general.WriteOnlocalStorage(general.keysObj.users, JSON.stringify(general.users));
    }
}

export function Feedback(student_id, title, description, createdBy){
    this.student_id = student_id;
    this.title = title;
    this.description = description;
    this.createdBy = createdBy;

    this.add = function(){
        general.feedbacks.push(this);
        general.WriteOnlocalStorage(general.keysObj.feedbacks, JSON.stringify(general.feedbacks));
    }

    this.delete = function(){
        let index = general.feedbacks.findIndex(feedback => feedback.id == this.id);
        general.feedbacks.splice(index, 1);
        general.WriteOnlocalStorage(general.keysObj.feedbacks, JSON.stringify(general.feedbacks));
    }

    this.update = function(){
        let index = general.feedbacks.findIndex(feedback => feedback.id == this.id);
        general.feedbacks[index] = this;
        general.WriteOnlocalStorage(general.keysObj.feedbacks, JSON.stringify(general.feedbacks));
    }
}

export function Student(id, firstName, lastName, email, password, birthDate, team_leader_id, mobile, imgUrl){
    this.id = id;
    this.firstName = firstName;
    this.lastName = lastName;
    this.email = email;
    this.password = password;
    this.birthDate = birthDate;
    this.team_leader_id = team_leader_id;
    this.mobile = mobile;
    this.imgUrl = imgUrl;

    this.add = function(){
        general.students.push(this);
        general.WriteOnlocalStorage(general.keysObj.students, JSON.stringify(general.students));
    }

    this.delete = function(){
        let index = general.students.findIndex(student => student.id == this.id);
        general.students.splice(index, 1);
        general.WriteOnlocalStorage(general.keysObj.students, JSON.stringify(general.students));
    }

    this.update = function(){
        let index = general.students.findIndex(student => student.id == this.id);
        general.students[index] = this;
        general.WriteOnlocalStorage(general.keysObj.students, JSON.stringify(general.students));
    }
}

export function Todo(students_ids, title, description, createdBy){
    this.students_ids = students_ids;
    this.title = title;
    this.description = description;
    this.createdBy = createdBy;

    this.add = function(){
        general.todos.push(this);
        general.WriteOnlocalStorage(general.keysObj.todos, JSON.stringify(general.todos));
    }

    this.delete = function(){
        let index = general.todos.findIndex(todo => todo.id == this.id);
        general.todos.splice(index, 1);
        general.WriteOnlocalStorage(general.keysObj.todos, JSON.stringify(general.todos));
    }

    this.update = function(){
        let index = general.todos.findIndex(todo => todo.id == this.id);
        general.todos[index] = this;
        general.WriteOnlocalStorage(general.keysObj.todos, JSON.stringify(general.todos));
    }
}

export function Announcement(id, title, description, createdBy){
    this.id = id;
    this.title = title;
    this.description = description;
    this.createdBy = createdBy;

    this.add = function(){
        general.announcements.push(this);
        general.WriteOnlocalStorage(general.keysObj.announcements, JSON.stringify(general.announcements));
    }

    this.delete = function(){
        let index = general.announcements.findIndex(announcement => announcement.id == this.id);
        general.announcements.splice(index, 1);
        general.WriteOnlocalStorage(general.keysObj.announcements, JSON.stringify(general.announcements));
    }

    this.update = function(){
        let index = general.announcements.findIndex(announcement => announcement.id == this.id);
        general.announcements[index] = this;
        general.WriteOnlocalStorage(general.keysObj.announcements, JSON.stringify(general.announcements));
    }
}