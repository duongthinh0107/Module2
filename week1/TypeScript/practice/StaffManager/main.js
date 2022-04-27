"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Staff_1 = require("./Staff");
var Staff_2 = require("./Staff");
var staffList = [];
staffList.push(new Staff_1.Staff("Nguyen Van A", Staff_2.Gender.MALE, new Date("1990-09-19"), "anguyen@gmail.com", "0123456789"));
staffList.push(new Staff_1.Staff("Tran Thi A", Staff_2.Gender.FEMALE, new Date("1991-10-12"), "btran@gmail.com", "0123456790"));
staffList.push(new Staff_1.Staff("Huynh An Nhien", Staff_2.Gender.OTHER, new Date("1990-09-19"), "nhienhuynh@gmail.com", "0123456791"));
function showEmployee(staff) {
    console.log(staff);
}
staffList.forEach(showEmployee);
