import {User} from "./User";
import {UserManager} from "./UserManager";

let userProduct = new UserManager();

let user1 = new User('user1','user@gmail.com');
let user2 = new User('user2','user2@gmail.com','admin');


userProduct.addUser = user1;
userProduct.addUser = user2;

console.log(userProduct.getInfo);

console.log(userProduct.isAdmin(user2));

