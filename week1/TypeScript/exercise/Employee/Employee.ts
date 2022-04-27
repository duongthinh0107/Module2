import {Gender} from "./Gender";

export class Employee {
    fullName: string;
    gender: Gender;
    birthday: Date;
    email: string;
    constructor(fullName: string, gender: Gender, birthday: Date, email: string) {
        this.fullName = fullName;
        this.gender = gender;
        this.birthday = birthday;
        this.email = email;
    }
}