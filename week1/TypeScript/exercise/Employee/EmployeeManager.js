"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EmployeeManager = void 0;
var Employee_1 = require("./Employee");
var EmployeeManager = /** @class */ (function () {
    function EmployeeManager() {
        this.employeeList = [];
        this.employeeList = [];
    }
    EmployeeManager.prototype.showList = function () {
        console.log(this.employeeList);
    };
    EmployeeManager.prototype.add = function (fullName, gender, birthday, email) {
        var employee = new Employee_1.Employee(fullName, gender, birthday, email);
        this.employeeList.push(employee);
    };
    EmployeeManager.prototype.delete = function (index) {
        this.employeeList.splice(index, 1);
        this.showList();
    };
    return EmployeeManager;
}());
exports.EmployeeManager = EmployeeManager;
