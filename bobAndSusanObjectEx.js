var bob = new Object();
bob.age = 17;

bob.setAge = function(newAge) {
    bob.age = newAge;
};

bob.getYearOfBirth = function() {
    return 2014 - bob.age;
};
console.log(bob.getYearOfBirth()); //1997


//Another example-continues bob example
// here we define our method using "this", before we even introduce bob
var setAge = function(newAge) {
    this.age = newAge;
};
// now we make bob
var bob = new Object();
bob.age = 30;
// and down here we just use the method we already made
bob.setAge = setAge;

// change bob's age to 50 here
bob.setAge(50);
console.log(bob.age); //50


// here we define our method using "this", before we even introduce bob
var setAge = function(newAge) {
    this.age = newAge;
    return this.age;
};
// now we make bob
var bob = new Object();
bob.age = 30;
bob.setAge = setAge;

// make susan here, and first give her an age of 25
var susan = new Object();
susan.age = 25;
susan.setAge = setAge;

// here, update Susan's age to 35 using the method
susan.setAge(35);
console.log(susan.age); //35
