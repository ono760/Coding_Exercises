//This functions finds the greatest common divisor of two numbers.

var gcd = function(a, b) {
    if (!b) {
        return a;
    }

    return gcd(b, a % b);
};

console.log(gcd(14, 21));
