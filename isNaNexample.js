//Outputs Your number is not really a number man
var isEven = function(number) {
    if (number % 2 == 0) {
        return true;
    } else if (isNaN(number)) {
        return ("Your number is not really a number man.");
    } else {
        return false;
    };
};

console.log(isEven(21));
