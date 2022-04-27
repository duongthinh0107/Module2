"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var StopWacth_1 = require("./StopWacth");
var time = new StopWacth_1.StopWatch();
setTimeout(function () {
    console.log(time.stop());
    console.log(time.getElapsedTime());
}, 1000);
