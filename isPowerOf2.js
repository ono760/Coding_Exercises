// Determining if an integer is a power of 2
var v = 32; // we want to see if v is a power of 2
var f; // the result goes here 
f = v && !(v & (v - 1));
console.log(f)
