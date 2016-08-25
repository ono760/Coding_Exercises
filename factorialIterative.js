//Factorial Iterative
function factorialIterative(n) {
    var result = n;
    while (n > 1) {
        n -= 1;
        result *= n
    }
    return result;
}

console.log(factorialIterative(4));
