/*//The function calls itself multiple times with different arguments to achieve the repeated multiplication.
But this implementation has one important problem: in typical JavaScript implementations, it’s about 10 times slower 
than the looping version. Running through a simple loop is a lot cheaper than calling a function multiple times.*/

function power(base, exponent) {
    if (exponent === 0) {
        return 1;
    } else {
        return base * power(base, exponent - 1);
    };
};

console.log(power(2, 3));
// → 8
