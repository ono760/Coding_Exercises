/**
 * This function should return the n-th number of the fibonacci sequence. 
 * This sequence is created by adding the previous two numbers in the sequence
 * together in order to get the next number. The first 2 are chosen to be 1 
 * arbitrarily. For example, the first few numbers are:
 *      1, 1, 2, 3, 5, 8, 13, 21
 * 
 * fibonacci(0) === 1
 * fibonacci(1) === 1
 * fibonacci(2) === 2
 * fibonacci(3) === 3
 * fibonacci(4) === 5
 ... and so on.
 */

function fibonacci(number) {
    var fibNumber;
    
    if (number <= 1) {
        return 1;
    };
    var prevDigit = fibonacci(number - 1);
    var otherPrevDigit = fibonacci(number - 2);
    fibNumber = prevDigit + otherPrevDigit;
    return fibNumber;
};

console.log(fibonacci(6)) //13
