"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserManager = void 0;
var UserManager = /** @class */ (function () {
    function UserManager() {
        this.users = [];
    }
    Object.defineProperty(UserManager.prototype, "getInfo", {
        get: function () {
            return this.users;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(UserManager.prototype, "addUser", {
        set: function (uSer) {
            // @ts-ignore
            this.users.push(uSer);
        },
        enumerable: false,
        configurable: true
    });
    UserManager.prototype.isAdmin = function (user) {
        return user.roll;
    };
    return UserManager;
}());
exports.UserManager = UserManager;
