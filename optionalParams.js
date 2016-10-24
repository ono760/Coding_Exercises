/*The following version of power can be called either with two arguments or with a single argument, 
in which case the exponent is assumed to be two, and the function behaves like square.*/

function power(base, exponent) {
    if (exponent === undefined) {
        exponent = 2;
    };

    var result = 1;
    for (var count = 0; count < exponent; count++) {
        result *= base;
    };

    return result;
};

console.log(power(4));
// → 16
console.log(power(4, 3));
// → 64
