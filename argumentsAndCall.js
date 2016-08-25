//Call, maps parameters passed after the first one

function addMany() {
    this.total = 0;
    for (var i = 0; i < arguments.length; i++) {
        this.total += arguments[i];
    };

    return this.total;
};

someObject = {};
console.log(addMany.call(someObject, 0, 55, 100, 0, 200)); //355
