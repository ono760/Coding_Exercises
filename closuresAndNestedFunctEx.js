//basic closure example:
function showName(firstName, lastName) {
    var nameIntro = "Your name is ";

    function makeFullName() {
        return nameIntro + firstName + lastName;
    };
    return makeFullName();
};

showName("Michael", "Jackson"); // Your name is Michael Jackson. 


//closure function example
function sayHello2(name) {
    var text = 'Hello ' + name; // Local variable
    var sayAlert = function() { console.log(text); }
    return sayAlert;
}
var say2 = sayHello2('Bob');
say2(); // alerts "Hello Bob"

/*
To summarize:
• The inner function can be accessed only from statements in the outer function.
• The inner function forms a closure: the inner function can use the arguments and variables of the outer function,
while the outer function cannot use the arguments and variables of the inner function.

*/


//Another Ex of closure
// It defines a function, wrapValue, which creates a local variable. It then returns a function that accesses and returns this local variable.


function wrapValue(n) {
    var localVariable = n;
    return function() {
        return localVariable;
    };
}

var wrap1 = wrapValue(1);
var wrap2 = wrapValue(2);
console.log(wrap1());
// → 1
console.log(wrap2());
// → 2



//another closure example

function multiplier(factor) {
    return function(number) {
        return number * factor;
    };
}

var twice = multiplier(2);
console.log(twice(5));
// → 10




//The following example shows nested functions:
function addSquares(a, b) {
    function square(x) {
        return x * x;
    }
    return square(a) + square(b);
};

a = addSquares(2, 3); // returns 13
b = addSquares(3, 4); // returns 25
c = addSquares(4, 5); // returns 41



//Since the inner function forms a closure, you can call the outer function and specify arguments for both the outer and inner function:
function outside(x) {
    function inside(y) {
        return x + y;
    }
    return inside;
}
fn_inside = outside(3); // Think of it like: give me a function that adds 3 to whatever you give it
result = fn_inside(5); // returns 8

result1 = outside(3)(5); // returns 8

/*
Multiply-nested functions
Functions can be multiply-nested, i.e. a function (A) containing a function (B) containing a function (C).
Both functions B and C form closures here, so B can access A and C can access B.
 In addition, since C can access B which can access A, C can also access A.
 Thus, the closures can contain multiple scopes; they recursively contain the scope of the functions containing it.
 This is called scope chaining. (Why it is called "chaining" will be explained later.)
*/

//Consider the following example:
function A(x) {
    function B(y) {
        function C(z) {
            console.log(x + y + z);
        }
        C(3);
    }
    B(2);
}
A(1); // logs 6 (1 + 2 + 3)

//In this example, C accesses B's y and A's x. This can be done because:
//1.  B forms a closure including A, i.e. B can access A's arguments and variables.
//2.  C forms a closure including B.
//3.  Because B's closure includes A, C's closure includes A, C can access both B and A's arguments and variables.
// In other words, C chains the scopes of B and A in that order.
//The reverse, however, is not true. A cannot access C, because A cannot access any argument or variable of B,
//which C is a variable of. Thus, C remains private to only B.


/*
Closures
Closures are one of the most powerful features of JavaScript.
JavaScript allows for the nesting of functions and grants the inner function full access to all the
variables and functions defined inside the outer function (and all other variables and functions that the outer function has access to).
However, the outer function does not have access to the variables and functions defined inside the inner function.

*/


// A closure is created when the inner function is somehow made available to any scope outside the outer function.
var pet = function(name) { // The outer function defines a variable called "name"
        var getName = function() {
            return name; // The inner function has access to the "name" variable of the outer function
        }
        return getName; // Return the inner function, thereby exposing it to outer scopes
    },
    myPet = pet("Vivie");
myPet(); // Returns "Vivie"


//Another example.
var createPet = function(name) {
    var sex;
    return {
        setName: function(newName) {
            name = newName;
        },

        getName: function() {
            return name;
        },

        getSex: function() {
            return sex;
        },

        setSex: function(newSex) {
            if (typeof newSex == "string" && (newSex.toLowerCase() == "male" || newSex.toLowerCase() == "female")) {
                sex = newSex;
            }
        }
    }
}
var pet = createPet("Vivie");
pet.getName(); // Vivie
pet.setName("Oliver");
pet.setSex("male");
pet.getSex(); // male
pet.getName(); // Oliver

//In the code above, the name variable of the outer function is accessible to the inner functions,
//and there is no other way to access the inner variables except through the inner functions.


//another example:

function add(value1, value2) {
    function doAdd(operand1, operand2) {
        return operand1 + operand2;
    }

    return doAdd(value1, value2);
}

var foo = add(1, 2);
// foo equals 3


//another example:
var add = (function() {
    var counter = 0;
    return function() {
        return counter += 1;
    }
})();

add();
add();
add();
// the counter is now 3


//The following example shows how a closure is created and used.
function add(value1) {
    return function doAdd(value2) {
        return value1 + value2;
    };
}
var increment = add(1);
var foo = increment(2);
// foo equals 3




//Closures have access to the outer function's variable even after the outer function returns:  Therefore, you can call the inner function later in your program. This example shows that;

function celebrityName(firstName) {

    var nameIntro = "This celebrity is ";

    function lastName(theLastName) {

        return nameIntro + firstName + theLastName;
    }


    return latName;


}


var mjName = celebrityName("Michael"); //the celebrityName outer function has returned at this point. 

mjName("Jackson"); //outputs This celebrity is Michael Jackson. 




//closures store references to the outer function's variables; they do not store the actual value:

function celebrityID() {

    var celebrityID = 999;


    return {
        getID: function() { //returns an object with some inner functions
            return celebrityID;
        },

        setID: function(theNewID) {
            celebrityID = theNewID;
        }

    }

}

var mjID = celebrityID();
mjID.getID(); //999
mjID.setID(567); //changes the outer function variable
mj.getID(); //567. Returns the celebrityId variable. 



//Because closures have access to the updated values of the outer function's variables, they can also lead to bugs when the outer fucntion's variable changes with a for loop. 







//callback functions. 
//we can pass an anonynmous function (function without a name) to the forEach method as a parameter. 
var friends = ["Mike", "Stacy", "Andy", "Rick"];

friends.forEach(function(eachName, index) {
    console.log(index + 1 + "." + eachName);
}); //output is 1.Mike, 2. Stacy, 3. Andy, 4. Rick







//Another popular pattern is to declare a named function and pass the name of that function to the parameter. 

var allUserData = [];

function logStuff(userData) {

    if (typeof logStuff === 'string') {
        console.log(userData);
    } else if (typeof userData === 'object') {
        for (var item in userData) {
            console.log(item + ":" + userData[item]);
        }
    }

}

function getInput(options, callback) {
    allUserData.push(options);
    callback(options); //we pass options as a parameter to the callback function, but we can pass any other parameters, just like any function!
}

//when we call the getInput function, we pass logStuff as a parameter. So logStuff wil be the function that will called back (or executed) inside the getInput function.

getInput({ name: "Rich", speciality: "JavaScript" }, logStuff);
//name: Rich
//speciality: JavaScript.
