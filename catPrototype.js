var Cat = function(name, hunger, happiness, tiredness, lonliness) {
    this.name = name || "stray"
    this.hunger = hunger || 10;
    this.happiness = happiness || 10;
    this.tiredness = tiredness || 10;
    this.lonliness = lonliness || 10;
    this.name = name || 'stray'
}

Cat.prototype.feed = function(foodAmount) {
    this.happiness += 5;
    this.hunger -= foodAmount;
}

Cat.prototype.nap = function(hours) {
    this.happiness += 5;
    this.tiredness -= hours;
}

Cat.prototype.getPetted = function() {
    this.happiness += 5;
    this.lonliness -= 5;
    console.log("purr purr")
};

Cat.prototype.status = function() {
    if (this.tiredness < 3) {
        console.log("Your cat is really energetic")
    } else {
        console.log("Your cat is pretty sleepy")
    }
    if (this.hunger < 3) {
        console.log("Your cat is really full")
    } else {
        console.log("Your cat is pretty hungry")
    }

}



var Person = function(name) {
    this.name = name || "stranger";
}

Person.prototype.petAnimal = function(animal) {
    if (animal.getPetted) {
        console.log("Oh hi, " + animal.name);
        animal.getPetted()
    }
}

var fluffy = new Cat("fluffy");
fluffy.feed(5);
fluffy.nap(6);

var sparkles = new Cat("sparkles");
sparkles.feed(8);


var tyler = new Person("Tyler")

tyler.petAnimal(sparkles)

sparkles.status();
