"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Gender_1 = require("./Gender");
var EmployeeManager_1 = require("./EmployeeManager");
var employeeManager = new EmployeeManager_1.EmployeeManager();
employeeManager.add('NVA', Gender_1.Gender.MALE, new Date('1-1-1111'), 'NVA@gmail.com');
employeeManager.add('NVB', Gender_1.Gender.MALE, new Date('1-1-1111'), 'NVA@gmail.com');
employeeManager.add('NVC', Gender_1.Gender.MALE, new Date('1-1-1111'), 'NVA@gmail.com');
employeeManager.delete(1);
employeeManager.showList();
