console.log(myFirstFunction);

myFirstFunction();

console.log(mySecondFunction);

console.log(myFirstVariable);

function myFirstFunction() {
    console.log("firstFunction");
}

console.log("some filler statement");

var mySecondFunction = function() {
    console.log("secondFunction");
}

mySecondFunction();

var myFirstVariable = "50";

console.log(myFirstVariable);

// console.log(unknownVariable);

/*Our console looks like this:

[Function: myFirstFunction]
firstFunction
undefined
undefined
some filler statement
secondFunction
50
/Users/Tyler/Desktop/tmp.js:22
console.log(unknownVariable);
            ^
ReferenceError: unknownVariable is not defined

*/

function returnAFunction() {
    return function(){
        console.log("I'm an inner function!");
    }
}
var returnedFunction = returnAFunction();
returnedFunction();
// Similarly, you can do
returnAFunction()();


//closures example

function returnAFunction() {
    var closedOver = "This information is closed over";
return function(){
        console.log(closedOver);
    }
}
var returnedFunction = returnAFunction();
returnedFunction();
// Similarly, you can do
returnAFunction()();
// This however, breaks
//console.log(closedOver); //if output, gives error. 

//Another closure example:
function closeMe() {
  var count = 0;
return function() {
       return count++;
    }
}
var counter = closeMe();
var secondCounter = closeMe();
console.log(counter());                 // ?
console.log(counter());                 // ?
console.log(counter());                 // ?
console.log(counter());                 // ?
console.log("=========");
console.log(secondCounter());           // ?
console.log(secondCounter());           // ?
console.log(secondCounter());           // ?
console.log(secondCounter());           // ?
/*Our Output is:
0
1
2
3
=========
0
1
2
3
*/



































