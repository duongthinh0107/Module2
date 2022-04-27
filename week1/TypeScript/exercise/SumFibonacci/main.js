function fibonacci(number) {
    var num1 = 1;
    var num2 = 1;
    var temp;
    var fibonacci = "";
    for (var i = 0; i < number; i++) {
        fibonacci += num1 + " ";
        temp = num1 + num2;
        num1 = num2;
        num2 = temp;
    }
    console.log(fibonacci);
    console.log(temp);
}
fibonacci(6);
