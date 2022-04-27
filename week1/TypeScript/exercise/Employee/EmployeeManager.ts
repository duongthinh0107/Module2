import {Gender} from "./Gender";
import {Employee} from "./Employee";

export class EmployeeManager {
    employeeList: Employee[] = [];


    constructor() {
        this.employeeList = [];

    }
    showList():void{
        console.log(this.employeeList)
    }
    add(fullName,gender,birthday,email): void{
        let employee = new Employee(fullName,gender,birthday,email)
        this.employeeList.push(employee);
    }
    delete(index):void{
        this.employeeList.splice(index,1);
        this.showList();
    }
}