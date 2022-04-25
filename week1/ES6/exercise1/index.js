const lastIndexOf = (arr,elt,start = arr.length-1)=> {
    for (let i = start-1; i >= 0 ; i--) {
        if (arr[i] === elt) return i;
    }
    return -1;
}
let arr = [1,2,1,2];
console.log(lastIndexOf(arr, 2));