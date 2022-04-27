"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = void 0;
var User = /** @class */ (function () {
    // userList: [];
    function User(name, email, roll) {
        if (roll === void 0) { roll = 'user'; }
        this.name = name;
        this.email = email;
        this.roll = roll;
    }
    return User;
}());
exports.User = User;
