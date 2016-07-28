//Given an array of objects, where each object cantains a car make and whether or not it is made in the United States, 
//return an array of objects containing only cars manufactured in the United States.
var cars = [{
    make: 'Ford',
    madeInUnitedStates: true
}, {
    make: 'GM',
    madeInUnitedStates: true
}, {
    make: 'Honda',
    madeInUnitedStates: false
}];

// Traditional For Loop
var domesticCars = []
for (var i = 0; i < cars.length; i++) {
    if (cars[i].madeInUnitedStates) {
        domesticCars.push(cars[i])
    };
};

// Filter callback function
var domesticManufacturer = function(car) {
    return car.madeInUnitedStates;
};

var domesticCars = cars.filter(domesticManufacturer);
console.log(domesticCars);


var singleCar = function(car) {
    return car.make
};

console.log(cars.filter(domesticManufacturer).map(singleCar)[0]) // Ford
