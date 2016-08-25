var empty = {};
console.log(empty.toString);

console.log(empty.toString());

console.log(Object.getPrototypeOf({}) == Object.prototype); //true

console.log(Object.getPrototypeOf(Object.prototype)); //null

console.log(Object.prototype) //{}

console.log(Object.getPrototypeOf("string")); //[String: ""]

console.log({ key1: "ono", key2: "Eche" }.toString()); //[object Object]

//You can use Object.create to create an object with a specific prototype.
/*The “proto” rabbit acts as a container for the properties that are shared by all rabbits. 
An individual rabbit object, like the killer rabbit, contains properties that apply only to itself—in this case its 
type—and derives shared properties from its prototype.*/

var protoRabbit = {
    speak: function(line) {
        console.log("The " + this.type + " rabbit says '" + line + "'");
    }
};

var killerRabbit = Object.create(protoRabbit);
killerRabbit.type = "killer";
killerRabbit.speak("SKREEEE!");
// → The killer rabbit says 'SKREEEE!'

/*When you add a property to an object, whether it is present in the prototype or not, the property is added to the object itself, 
which will henceforth have it as its own property. If there is a property by the same name in the prototype, 
this property will no longer affect the object. The prototype itself is not changed.*/

/*Rabbit.prototype.teeth = "small"; console.log(killerRabbit.teeth);
// → small
killerRabbit.teeth = "long, sharp, and bloody";
console.log(killerRabbit.teeth);
// → long, sharp, and bloody
console.log(blackRabbit.teeth);
// → small
console.log(Rabbit.prototype.teeth);
// → small*/

//Calling toString on an array gives a result similar to calling .join(",")on it —it puts commas between the values in the array. 
console.log([1, 2, 5].toString()); // → 1,2,5

/*Directly calling

Object.prototype.toString with an array produces a different string. 
That function doesn’t know about arrays, so it simply puts the word “object” and the name of the type between square brackets.*/
console.log(Object.prototype.toString.call([1, 2])); // → [object Array]


//We can specify properties that, from the outside, look like normal properties but secretly have methods associated with them.

var pile = {
    elements: ["eggshell", "orange peel", "worm"],

    get height() {
        return this.elements.length;
    },

    set height(value) {
        console.log("Ignoring attempt to set height to", value);
    }

};

console.log(pile.height);
// → 3
pile.height = 100;
// → Ignoring attempt to set height to 100



//In object literal, the get or set notation for properties allows you to specify a function to be run when the property is read or written.
