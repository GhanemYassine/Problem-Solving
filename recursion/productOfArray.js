function product(arr){
    if(arr.length===0) return 1;
    return arr[0]* product(arr.slice(1));
}
console.log(product([1, 2, 3]));
console.log(product([1, 2, 3, 10]));