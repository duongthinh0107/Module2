import {Staff} from "./Staff";
import {Gender} from "./Staff";



let staffList: Staff[] = [];
staffList.push(new Staff("Nguyen Van A", Gender.MALE, new Date("1990-09-19"), "anguyen@gmail.com", "0123456789"));

staffList.push(new Staff("Tran Thi A", Gender.FEMALE, new Date("1991-10-12"), "btran@gmail.com", "0123456790"));


staffList.push(new Staff("Huynh An Nhien", Gender.OTHER, new Date("1990-09-19"), "nhienhuynh@gmail.com", "0123456791"));

function showEmployee(staff: Staff) {

    console.log(staff);
}
staffList.forEach(showEmployee);
