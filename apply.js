//apply, maps an array onto the parameters
function addMany() {
    this.total = 0;
    for (var i = 0; i < arguments.length; i++) {
        this.total += arguments[i];
    };

    return this.total;
};

var someObject = [];
var someNumbers = [0, 55, 100, 0, 200];

console.log(addMany.apply(someObject, someNumbers)); //355