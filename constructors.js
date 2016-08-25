//Instead of always using the boring Object constructor, we can make our own constructors.
//Constructors are a way to make objects with the keyword new.
//The most basic constructor is the Object constructor, which will make an object with no methods or properties.

//This way we can set the properties for an object right when it is created.
//So instead of using the Object constructor which is empty and has no properties, we can make our own constructors which have properties.

//CUSTOM CONSTRUCTORS
function Person(name, age) {
    this.name = name;
    this.age = age;
}

// Let's make bob and susan again, using our constructor

var bob = new Person("Bob Smith", 30);
var susan = new Person("Susan Jordan", 25);
var george = new Person("George Washington", 275);

console.log(bob); //outputs { name: 'Bob Smith', age: 30 }
console.log(bob.name); //outpouts Bob Smith


//Another example
function Person(name, age) {
    this.name = name;
    this.age = age;
    this.species = "Homo Sapiens";
};

var sally = new Person("Sally Bowles", 39);
var holden = new Person("Holden Caulfield", 16);
console.log("sally's species is " + sally.species + " and she is " + sally.age); //sally's species is Homo Sapiens and she is 39


//Another contructor example
//In addition to setting properties, constructors can also define methods.
//Here we have a Rectangle constructor, which sets the height and width properties equal to the arguments,
//just like our Person did with name and age.
function Rectangle(height, width) {
    this.height = height;
    this.width = width;
    this.calcArea = function() {
        return this.height * this.width;
    };

    this.calcPerimeter = function() {
        return (this.height * 2) + (this.width * 2);
    };
};

var rect1= new Rectangle(7, 3);
var area = rect1.calcArea();
console.log(area); //21
