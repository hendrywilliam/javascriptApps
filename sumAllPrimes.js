const sumAllPrimes = (number) => {;
    let result = 0;
    for (let i = 2; i <= number ; i++) {
        if(number % i === 0) {
            result += i;
        }
    }
    console.log (result);
}

sumAllPrimes(10);