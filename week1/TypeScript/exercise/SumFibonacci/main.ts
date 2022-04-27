
function fibonacci(number: number):void{
    let num1: number = 1;
    let num2: number = 1;
    let temp: number;
    let fibonacci: string = "";
    for (let i = 0; i < number; i++) {
        fibonacci += num1 + " ";
        temp = num1 + num2;
        num1 = num2;
        num2 = temp;
    }
    console.log(fibonacci);
    console.log(temp)

}

fibonacci(6);

