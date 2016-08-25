//Outputs Your number is not really a number man
var isEven = function(number) {
    if (isNaN(number)) {
        return ("Not a number");
    } else if (number % 2 == 0) {
        return true;
    } else {
        return false
    }
};

console.log(isEven(40));
