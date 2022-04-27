"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Staff_1 = require("./Staff");
var staff = new Staff_1.Staff('Staff 1', 'staff@gmail.com', 20);
var nameStaff = staff.getName();
console.log(nameStaff); // Staff 1
staff.setName('Staff 2');
var currentNameStaff = staff.getName();
console.log(currentNameStaff); // Staff 2
