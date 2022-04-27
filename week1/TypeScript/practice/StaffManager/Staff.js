"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Staff = exports.Gender = void 0;
var Gender;
(function (Gender) {
    Gender[Gender["MALE"] = 0] = "MALE";
    Gender[Gender["FEMALE"] = 1] = "FEMALE";
    Gender[Gender["OTHER"] = 2] = "OTHER";
})(Gender = exports.Gender || (exports.Gender = {}));
var Staff = /** @class */ (function () {
    function Staff(fullName, gender, birthday, email, numberPhone) {
        this.fullName = fullName;
        this.gender = gender;
        this.birthday = birthday;
        this.email = email;
        this.phoneNumber = numberPhone;
    }
    return Staff;
}());
exports.Staff = Staff;
