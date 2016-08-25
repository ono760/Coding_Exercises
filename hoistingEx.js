
//Running this will log undefined rather than 1
//The reason the value is undefined rather than 1 is also explained by the specification:
//A variable with an Initialiser is assigned the value of its AssignmentExpression when the VariableStatement is executed, not when the variable is created.
/*
function example() {  
  console.log(a);
  var a = 1;
}

example();  
*/

//The following example defines three functions and assigns them as methods to an object. Each method is then called after the loop has finished.
//The output will be 3 each time, because the closure is bound to the function scope, not the (non-existent) block scope.
function example() {  
  var o = {}, i = 0;
  for (i = 0; i < 3; i++) {
    o[i] = function() { console.log(i); };
  }
  o[0]();
  o[1]();
  o[2]();
}

example();  
console.log("");

//what is b?  //ouptut should be 1
//First thing that JS does is scan for any variables.
//Second, JS assigns them the value “undefined”
//Third, JS goes back to the top and executes the statement (goes after the operator) and checks/calculates value and is then assigned to variable, in a way replacing “undefined” with the value calculated.
//JS does this for all variables. (FROM VIMEO VIDEO!)
//This is why b will still be ! Remember/picture  the box/diagram example. 

var a=1;
var b=a;
a=5; //a's value is reassisgned to 5
console.log(a);//output is 5
console.log(b);  //outpuot is still 1 ! See above. 
console.log('');

//The @const annotation on a variable or property implies that it is not overwritable. 
//This is enforced by the compiler at build time. 
//This behavior is consistent with the const keyword (which we do not use due to the lack of support in Internet Explorer).
//The const declaration creates a read-only reference to a value. It does not mean the value it holds is immutable, just that the variable identifier cannot be reassigned.
//An initializer for a constant is required; that is, you must specify its value in the same statement in which it's declared (which makes sense, given that it can't be changed later).
//The value of a constant cannot change through re-assignment, and it can't be redeclared.
//A constant cannot share its name with a function or a variable in the same scope.
//The following example demonstrates how constants behave. Try this in your browser console.

// NOTE: Constants can be declared with uppercase or lowercase, but a common
// convention is to use all-uppercase letters.

// define MY_FAV as a constant and give it the value 7
const MY_FAV = 7;
console.log("MY_FAV");

// this will fail silently in Firefox and Chrome (but does not fail in Safari)
MY_FAV = 20;

// will print 7
console.log("my favorite number is: " + MY_FAV);

// trying to redeclare a constant throws an error 
const MY_FAV = 20;

// the name MY_FAV is reserved for constant above, so this will also fail
var MY_FAV = 20; 

// MY_FAV is still 7
console.log("my favorite number is " + MY_FAV);

// Assigning to A const variable is a syntax error
const A = 1; A = 2;

// const requires an initializer
const FOO; // SyntaxError: missing = in const declaration

// const also works on objects
const MY_OBJECT = {"key": "value"};

// Overwriting the object fails as above (in Firefox and Chrome but not in Safari)
MY_OBJECT = {"OTHER_KEY": "value"};

// However, object keys are not protected,
// so the following statement is executed without problems
MY_OBJECT.key = "otherValue"; // Use Object.freeze() to make object immutable




function getMysteryNumber() {
    var chooseMystery = function() {
        return 12;
    }

    return chooseMystery();

    var chooseMystery = function() { //unreachable.
        return 7;
    }
};

console.log(getMysteryNumber()); //12






//Another ex of hoisting
function capacityStatus(numPassengers, capacity) {
    var noSeats = function() {
        console.log("No seats left!");
        return false;
    }
    var seatsAvail = function() {
        console.log("There are " + (capacity - numPassengers) + " seats left!");
        return true;
    }
    if (numPassengers == capacity) {
        noSeats();
    } else {
        seatsAvail();
    }
}

capacityStatus(50, 50); //There are 50 seats left! 
capacityStatus(20, 60); //There are 40 seats...

