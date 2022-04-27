export enum Gender {
    MALE,
    FEMALE,
    OTHER
}

export class Staff {
    fullName: string;
    gender: Gender;
    birthday: Date;
    email: string;
    phoneNumber: string;
    constructor(fullName: string,gender: Gender,birthday: Date,email: string,numberPhone: string ) {
        this.fullName = fullName;
        this.gender = gender;
        this.birthday = birthday;
        this.email = email;
        this.phoneNumber = numberPhone;
    }

}