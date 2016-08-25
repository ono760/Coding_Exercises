function numberGenerator() {
    var num = 1;

    function checkNumber() {

        console.log(num);

    }

    num++;

    return checkNumber;

}

var number = numberGenerator();

number(); // 2


//another ex
function sayHello() {

    var say = function() {
        console.log(hello);
    }

    var hello = 'Hello, world!';
    return say;

}
var sayHelloClosure = sayHello();
sayHelloClosure(); // ‘Hello, world!’


//Ex

var x = 10;

function foo(a) {

    var b = 20;

    function bar(c) {
        var d = 30;

        return boop(x + a + b + c + d);
    }

    function boop(e) {
        return e * -1;

    }

    return bar;

}

var moar = foo(5); // Closure 
/*
The function below executes the function bar which was r when we executed the function foo in the line above. The invokes boop, at which point bar gets suspended and boop onto the top of the call stack (see the screenshot below
*/
console.log(moar(15));


//ex
var result = [];
for (var i = 0; i < 5; i++) {
    result[i] = function() {
        console.log(i);
    };
}
result[0](); // 5, expected 0 
result[1](); // 5, expected 1 
result[2](); // 5, expected 2 
result[3](); // 5, expected 3 
result[4](); // 5, expected 4

//should be
var result = [];
for (var i = 0; i < 5; i++) {
    result[i] = (function inner(x) {
        // additional enclosing context
        return function() {
            console.log(x);
        }
    })

    (i);

}

result[0](); // 0, expected 0 
result[1](); // 1, expected 1 
result[2](); // 2, expected 2 
result[3](); // 3, expected 3 
result[4](); // 4, expected 4

//ex

function mysteriousCalculator(a, b) {
    var mysteriousVariable = 3;
    return {
        add: function() {
            var result = a + b + mysteriousVariable
            return toFixedTwoPlaces(result);
        },

        subtract: function() {
            var result = a - b - mysteriousVariable
            return toFixedTwoPlaces(result);
        }

    }
};

function toFixedTwoPlaces(value) {
    return value.toFixed(2);
};

var myCalculator = mysteriousCalculator(10.01, 2.01);
myCalculator.add() // 15.02
myCalculator.subtract() // 5.00


//ex
function secretPassword() {
    var password = 'xh38sk';
    return {
        guessPassword: function(guess) {
            if (guess === password) {
                return true;
            } else {
                return false;
            }
        }
    }
}
var passwordGame = secretPassword();
passwordGame.guessPassword('heyisthisit?'); // false 
passwordGame.guessPassword('xh38sk'); // true

//ex
function outerInfo() {
    var privateData = "Super Secret Information!";

    function innerInfo() {
        console.log(privateData)
    }
    return innerInfo
}
var seePrivateData = outerInfo();
seePrivateData() // returns "Super Secret Information!"


function buildCoveTicketMaker(transport) {
    var passengerNumber = 0;
    return function(name) {
        passengerNumber++;
        console.log("Here is your transportation ticket via the " + transport + ".\n" +
            "Welcome to the cold closures cove, " + name + "!" + "You are passenger # " + passengerNumber + '.');
    }
};

var getSubmarineTicket = buildCoveTicketMaker("Submarine");
getSubmarineTicket("Mario ");
getSubmarineTicket("Luigi ");


function assignTorpedo(name, passengerArray) {
    var torpedoAssignment;
    for (var i = 0; i < passengerArray.length; i++) {
        if (passengerArray[i] == name) {
            return torpedoAssignment = function() {
                console.log("Ahoy, " + name + "!\n" + "Man your post at Torpedo # " + (i + 1) + "!");
            }
        }
    }
};

var subPassengers = ["Luke", "Leia", "Han", "Chewie", "Yoda", "R2-D2", "C-3PO", "Boba"];
var giveAssignment = assignTorpedo("Chewie", subPassengers)
giveAssignment();
