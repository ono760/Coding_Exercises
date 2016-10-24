// Given an integer n return 'odd' if the number of its divisors 
// is odd. Otherwise return 'even'.

// Examples:

// All prime numbers have exactly two divisors (hence 'even')

// For n=12 the divisors are [1,2,3,4,6,12] – 'even'

// For n=4 the divisors are [1,2,4] – 'odd'

// Write some tests!

function oddity(n) {
    var divisors = [];
    if (n < 0) {
        n = n * -1
    };
    for (var i = 1; i <= n; i++) {
        if (n % i == 0) {
            divisors.push(n / i);
        }
    };
    
    if (divisors.length % 2 === 0) {
        return "even";
    } else {
        return "odd";
    };
};


// function oddity(n) {
//   return Math.sqrt(n) % 1 == 0 ? 'odd' : 'even';
// }
