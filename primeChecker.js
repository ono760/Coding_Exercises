// This functions checks if the given number is a prime number. 

function isPrime(num) {
    for (var i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) {
            return false;
        };
    };

    return !(num === 1);
};
console.log(isPrime(4));
console.log(isPrime(1));
console.log(isPrime(3));
console.log(isPrime(5));
console.log(isPrime(7));
