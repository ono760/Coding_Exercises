function Dog(name, breed, address, age) {
    this.name = name;
    this.breed = breed;
    this.address = address;
    this.age = age;
    this.speak = function() {
        var sounds = ["bark", "grrrr", "rough", "woof", "oink"];
        var rand = Math.floor(Math.random() * sounds.length);
        return this.name + " says " + sounds[rand];
    }
}

var mixie = new Dog("Mixie", "chihua", "Riverside, CA", 10);
var astro = new Dog("Astro", "pit", "Fallbrook, CA", 4);

/*console.log(mixie.speak());
console.log(astro.speak());*/
// console.log(mixie.speak===astro.speak);//false the comparison returns false, meaning that every instance of Dog that we create gets its own version of the function.


//To save on the programs memory consumption, you can add the functions you want to it's prototype:
function Dog(name, breed, address, age) {
    this.name = name;
    this.breed = breed;
    this.address = address;
    this.age = age;
}

Dog.prototype.speak = function() {
    var sounds = ["bark", "grrrrrr", "rough rough", "woof", "oink"];
    var rand = Math.floor(Math.random() * sounds.length);
    return this.name + " says " + sounds[rand];
};

var mixie = new Dog("Mixie", "chihua", "Riverside, CA", 10);
var astro = new Dog("Astro", "pit", "Fallbrook, CA", 4);
console.log(mixie.speak());
console.log(astro.speak());
console.log(mixie.speak === astro.speak); //All properties on the prototype are shared among all instances of the class. In other words the following console.log now returns true:
