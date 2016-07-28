// write a function declaration called addManyNumbers that takes in any number of parameters
// and returns the sum of the input parameters

var addManyNumbers = function() {
    var sumOfParameters = 0;

    for (var i = 0; i < arguments.length; i++) {
        sumOfParameters += arguments[i];
    }
    console.log("Number of args: ", arguments.length);

    return sumOfParameters;

};

console.log(addManyNumbers(5, 5, 5, 5, 5, 5, 10)); //ouputs 40
console.log(addManyNumbers(4, 5, 6)); //ouputs 15
