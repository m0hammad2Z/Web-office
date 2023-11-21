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
}

export function News(id,title,description,imageUrl){
    this.id = id;
    this.title = title;
    this.description = description;
    this.imageUrl = imageUrl;
}

export function Feedback(student_id, title, description, createdBy){
    this.student_id = student_id;
    this.title = title;
    this.description = description;
    this.createdBy = createdBy;
}

export function Student(id, firstName, lastName, email, password, birthDate, mobile, imgUrl){
    this.id = id;
    this.firstName = firstName;
    this.lastName = lastName;
    this.email = email;
    this.password = password;
    this.birthDate = birthDate;
    this.mobile = mobile;
    this.imgUrl = imgUrl;
}

export function Todo(student_id, title, description, createdBy){
    this.student_id = student_id;
    this.title = title;
    this.description = description;
    this.createdBy = createdBy; // Trainer
}

export function Announcement(id, title, description, createdBy){
    this.id = id;
    this.title = title;
    this.description = description;
    this.createdBy = createdBy;
}