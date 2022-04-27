class Instructor{
    constructor({name,roll = "assistant"} = {}) {
        this.name = name;
        this.roll = roll;
    }
    renderDetail(){
        console.log(`${this.name}-${this.roll}`)
    }
    static hello(){
        console.log(`Hello`)
    }
    static canTeach(instructor){
        return (instructor.roll === 'classroom')
    }
}


let juniorInstructor = new Instructor({name : 'Brain'})
let seniorInstructor = new Instructor({name: 'Alice', roll: "classroom"})

juniorInstructor.renderDetail();
seniorInstructor.renderDetail()

Instructor.hello();
console.log(`${juniorInstructor}can teach ${Instructor.canTeach(juniorInstructor)}`)
console.log(`${seniorInstructor}can teach ${Instructor.canTeach(seniorInstructor)}`)