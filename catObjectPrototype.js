var Cat = function(hunger, happiness, tiredness, loneliness) {
    this.hunger = hunger || 10;
    this.happiness = happiness || 10;
    this.tiredness = tiredness || 10;
    this.loneliness = loneliness || 10;
};

Cat.prototype.feed = function(foodAmount) {
    this.happiness += 5;
    this.hunger -= foodAmount;

};

Cat.prototype.nap = function(hours) {
    this.happiness += 5;
    this.tiredness -= hours;
};

Cat.prototype.pet = function() {
    this.happiness += 5;
    this.loneliness -= 5;
};

var fluffy = new Cat();
fluffy.feed(5);
fluffy.nap(6);
fluffy.pet();

var sparkles = new Cat();
sparkles.feed(8);

console.log(fluffy);
console.log(sparkles);
