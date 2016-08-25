//Consider the following code that uses numbers (a primitive type):

var a = 3.14;  // Declare and initialize a variable
var b = a;     // Copy the variable's value to a new variable
a = 4;         // Modify the value of the original variable
console.log(b);       // Displays 3.14; the copy has not changed

//Now consider what happens if we change the code slightly so that it uses arrays (a reference type) instead of numbers:

var a = [1,2,3];  // Initialize a variable to refer to an array
var b = a;        // Copy that reference into a new variable
a[0] = 99;        // Modify the array using the original reference
console.log(b);    // Display the changed array [99,2,3] using the new reference

//If it does seem surprising, take a closer look at the second line. 
//Note that it is the reference to the array value, not the array itself, that is being assigned in this statement. 
//After that second line of code, we still have only one array object; there just happens to be two references to it.
//Variables hold the actual values of primitive types, but they hold only references to the values of reference types.
//The question of whether strings are a primitive or reference type is actually moot because strings are immutable: 
//there is no way to change the contents of a string value.