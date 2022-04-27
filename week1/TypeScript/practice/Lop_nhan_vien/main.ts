import {Staff} from "./Staff";

let staff = new Staff('Staff 1', 'staff@gmail.com', 20);
let nameStaff = staff.getName();
console.log(nameStaff); // Staff 1
staff.setName('Staff 2');
let currentNameStaff = staff.getName();
console.log(currentNameStaff) // Staff 2
