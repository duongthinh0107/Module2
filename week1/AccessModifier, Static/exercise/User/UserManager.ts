import {User} from "./User";

export class UserManager {
    private users: [] = [];
    get getInfo(){
        return this.users;
    }
    set addUser(uSer){
        // @ts-ignore
        this.users.push(uSer);
    }
    isAdmin(user){
        return user.roll
    }
}