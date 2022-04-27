import {StopWatch} from "./StopWacth";
let time = new StopWatch();

setTimeout(() => {
    console.log(time.stop())
    console.log(time.getElapsedTime())
}, 1000)
