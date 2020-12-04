function somerecursive(arr,cb){
    if(!arr.length) return false;
    if (!cb(arr[0])) return somerecursive(arr.slice(1),cb);
    return true;
}
console.log(somerecursive([1, 2, 3, 4], val => val % 2 !== 0));
console.log(somerecursive([4, 6, 8, 9], val => val % 2 !== 0));
console.log(somerecursive([4, 6, 8, 10], val => val % 2 !== 0));
console.log(somerecursive([4, 6, 8], val => val > 10));