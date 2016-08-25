//In this example, the keyword this refers to the person object (sometimes it's easier to just think, what is the function I am calling attached to?)
var person = {
    name: "Elie",
    sayHi: function() {
        return this.name + " says hi!"
    }
};

// the keyword `this` has a parent object called `person`
// so we are going to access the parent object's property of name

console.log(person.sayHi()); //Elie says hi!

//Let's see what happens when we use the keyword this without explicitly defining a parent object.

//So how can we borrow the sayHi function from person but instead of this.name referring to "Elie", we want it to refer to "Janey". 
//Call/Apply/Bind to the rescue!

var person = {
    name: "Elie",
    sayHi: function() {
        return `${this.name} says hi!`
    }
};

var person2 = {
    name: "Janey",
};

console.log(person.sayHi.call(person2)); //Jane says hi!

//Common use cases for call, apply and bind

//call
//Converting an array-like object (like the keyword arguments) into an array 
Array.prototype.slice.call(arguments);

//apply 
//finding the maximum value for multiple numbers (although this can be also accomplished with the spread operator 
//For calling other functions when the arguments are not known.

console.log(Math.max.apply(this, [1, 2, 3, 4, 5])) //5


//Apply works very well with the arguments array. An example would be - write a function that console.logs all of the arguments passed to it

function log() {
    console.log.apply(console, arguments)
};

//bind
//ensuring that you get the correct value of the keyword this when dealing with async code (although this can be accomplished using the arrow syntax with es2015)
var person = {
    name: "Elie",
    sayHi: function() {
        setTimeout(function() {
            console.log(`${this.name} says hi!`)
        }.bind(this), 1000)
    }
};

