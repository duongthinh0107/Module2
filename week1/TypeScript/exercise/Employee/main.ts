import {Gender} from "./Gender";
import {Employee} from "./Employee";
import {EmployeeManager} from "./EmployeeManager";

let employeeManager= new EmployeeManager();
employeeManager.add('NVA',Gender.MALE,new Date('1-1-1111'),'NVA@gmail.com')
employeeManager.add('NVB',Gender.MALE,new Date('1-1-1111'),'NVA@gmail.com')
employeeManager.add('NVC',Gender.MALE,new Date('1-1-1111'),'NVA@gmail.com')
employeeManager.delete(1)
employeeManager.showList();
