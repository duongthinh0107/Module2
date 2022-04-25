function replace(array, from, to) {

    array.splice.apply(array, [from, to])


}


let testArray = [1, 2, 100, 100, 6]
let arr = [3, 4, 5];

replace(testArray, 2, 4)
let newArr = [...testArray,...arr]
console.log(newArr)

