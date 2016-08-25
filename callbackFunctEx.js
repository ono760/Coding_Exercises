//a "callback" function. A callback function in JavaScript is any function that is passed in as a parameter to another function and is called at the end of that function. 

function highOrderFunction(someNumber, callbackFunction) {
    someNumber += 10;
    callbackFunction(someNumber);
};

var printHello = function() {
    console.log('Hello');
};

var printANumber = function(input) {
    console.log("printing a number");
    console.log(input);
};

var someNumber = 10;

highOrderFunction(someNumber, printHello);
highOrderFunction(someNumber, printANumber);
/*This code is perfectly legal, and prints:
Hello
printing a number
20*/
