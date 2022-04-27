import {Roll} from "./Roll";

export class User {
    protected name: string;
    protected email: string;
    roll: string;
    // userList: [];
    constructor(name: string,email: string,roll: string = 'user') {
        this.name = name;
        this.email = email;
        this.roll = roll;
    }

}