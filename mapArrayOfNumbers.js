//Given an array of numbers, return an array where each number is multiplied by two.

var numbers = [2, 12, 3, 17, 233, 21];
var doubleNumbers = []
for (var i = 0; i < numbers.length; i++) {
    doubleNumbers.push(numbers[i] * 2);
};
console.log(doubleNumbers) //[ 4, 24, 6, 34, 466, 42 ]

// Map callback function
var doubleDown = function(number, index) {
    return number * 2
};

var doubleNumberss = numbers.map(doubleDown);
console.log(doubleNumberss); //[ 4, 24, 6, 34, 466, 42 ]


//The map( ) method will always take in a function as a parameter, and return a new array with the results.
//Map works like a loop that applies a function to each array index
var numbers = [1, 2, 3, 4, 5, 6, 200];
var results = numbers.map(function double(num) {
    return num * 2;
});
console.log(results); //[ 2, 4, 6, 8, 10, 12, 4 ]


//ex of map

var fruits = ["Apple", "Orange", "Pineapple", "Cranberry", "Pomegranate"];
var fruitJuice = fruits.map(function(fruit) {
    return fruit + " juice";
});

console.log(fruitJuice);
/*[ 'Apple juice',
  'Orange juice',
  'Pineapple juice',
  'Cranberry juice',
  'Pomegranate juice' ]
*/
