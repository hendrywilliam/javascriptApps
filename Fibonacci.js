const fibonacciArr = [];

const fibonacci = (n) => {
    if(n <= 1) return n;
    return fibonacci(n-1) + fibonacci(n-2)
}

let range = 5;
for(let i = 0; i<range; i++) {
    fibonacciArr.push(fibonacci(i))
}
console.log(fibonacciArr);