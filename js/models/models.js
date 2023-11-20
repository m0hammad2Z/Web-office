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

    this.getFullName = function(){
        return `${this.firstName} ${this.lastName}`;
    }
}
