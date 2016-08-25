
//An object example
var phonebookEntry = {}; //empty object
phonebookEntry.name = 'Oxnard Montalvo'; //adds name property to object.
phonebookEntry.number = '(555) 555-5555';
phonebookEntry.phone = function() {
    console.log('Calling ' + this.name + ' at ' + this.number + '...');
};
phonebookEntry.phone();



//another example

var thisObj = {
    keyOne: 1
}

console.log(Object.keys(thisObj)); //outputs the keys of thisObj in array form, so in this case, ['keyOne']


//output is keyOne but doens't return as an array, return as the actual name of the key! 
//inside for, the word key can be any identifier! 
for (var key in thisObj) {
    console.log(key);
}




//Because an Object contains multiple bits of info, it’s often called a “composite value.”
//Properties can refer to numbers, strings, arrays, functions, and even other Objects!

var booksArray = ["Great Expectations", "The Remains of the Day", "Peter Pan"];
var myBox = {
    height: 6,
    width: 8,
    length: 10,
    volume: 480,
    material: "cardboard",
    contents: booksArray
};
myBox.volume = myBox.length * myBox.width * myBox.height; //480
console.log(myBox.width); //8 However, note that volume will be incorrect using the given l x w x h
console.log(myBox["length"]); //10
console.log(myBox.volume); //480 Dot operator also allows us to change property value
myBox.contents.push("On the road");
console.log(myBox.contents); //["Great Expectations", "The Remains of the Day", "Peter Pan", "On the Road"]; 
//Thus, key names with spaces can only be accessed with brackets!

//The delete keyword will completely delete the entire contents property...not just the value associated with that property.
//Watch out, though...delete will return true each time, regardless of whether the property existed or not! Think of it as asking: is this property gone?
delete myBox.contents; //Additionally, we’ve only deleted the property name and the reference, but not the original booksArray outside the Box.
console.log(myBox.contents); //undefined now because deleted. 
console.log(booksArray);

//ex of type reference
var person = { name: "Matt" };
var anotherPerson = person;
var doppelganger = { name: "Matt" };
console.log(person === anotherPerson); // true;
console.log(person === doppelganger); // false;

//mutability
var person = { name: "Matthew" };
var anotherPerson = person;
person.name = "Matt";
console.log(anotherPerson.name); // Matt


var person = {
    firstName: "Homer",
    middleName: "Jay",
    lastName: "Simpson",
};

for (var key in person) {
    console.log(person[key]);
}
// "Homer"
// "Jay"
// "Simpson"

for (var key in person) {
    console.log(key);
}
// firstName
// middleName
// lastName

