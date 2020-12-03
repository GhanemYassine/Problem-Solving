function fib(x){
    if(x<2) return x;
    return fib(x-1)+fib(x-2);
}
console.log(fib(4));
console.log(fib(10));
console.log(fib(28));
console.log(fib(35));