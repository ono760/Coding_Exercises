function Calculator() {};

Calculator.prototype.evaluate = function(num1, num2, op) {
    if (op === '+') {
        return this.__add(num1, num2);
    } else if (op === '-') {
        return this.__subtract(num1, num2);
    }
};

Calculator.prototype.__add = function(num1, num2) {
    return num1 + num2;
};

Calculator.prototype.__subtract = function(num1, num2) {
    return num1 - num2;
};

var evaluation = new Calculator();
console.log(evaluation.evaluate(4, 5, '+')); //9

//The double underscore tells the caller to avoid using the function.
