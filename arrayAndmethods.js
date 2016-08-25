//standard methods for arrays
//forEach();
//filter();
//map();

var newArray = [
    ["Ono", "BB", "KK"],
    ["2", "6", "9"],
    [12, 20, 45]
];
console.log(newArray[1][0]);

//jagged array has different-size arrays inside.
var jagged = [
    ["Ono", "Kev"],
    ["1", "2", "4"],
    [1]
];

/*
The forEach() method provides another way of iterating over an array:
The function passed to forEach is executed once for every item in the array,
with the array item passed as the argument to the function.
Unassigned values are not iterated in a forEach loop.
*/
var colors = ['red', 'green', 'blue', 'Pink'];
colors.forEach(function(color) {
    console.log(color);
});

// Here is an array of multiples of 8. But is it correct?
// Test to see if a number from the array is NOT a true multiple of eight. Real multiples will return false.
var multiplesOfEight = [8, 16, 24, 32, 40, 58];
var answer = multiplesOfEight[5] % 8 !== 0;
console.log(answer); //outputs true



//concat() joins two arrays and returns a new array.
var myArray = new Array("1", "2", "3");
myArray = myArray.concat("a", "b", "c");
// myArray is now ["1", "2", "3", "a", "b", "c"]
console.log(myArray);

//join(deliminator = ',') joins all elements of an array into a string.
var myArray = new Array("Wind", "Rain", "Fire");
var list = myArray.join(" - "); // list is "Wind - Rain - Fire"
console.log(list);

//slice(start_index, upto_index) extracts a section of an array and returns a new array.
var myArray = new Array("a", "b", "c", "d", "e");
myArray = myArray.slice(1, 4); // starts at index 1 and extracts all elements
// until index 3, returning [ "b", "c", "d"]

//splice(index, count_to_remove, addElement1, addElement2, ...) removes elements from an array and (optionally) replaces them.
var myArray = new Array("1", "2", "3", "4", "5");
console.log(myArray.splice(1, 3, "a", "b", "c", "d"));
// myArray is now ["1", "a", "b", "c", "d", "5"]
// This code started at index one (or where the "2" was),
// removed 3 elements there, and then inserted all consecutive
// elements in its place.



//reverse() transposes the elements of an array: the first array element becomes the last and the last becomes the first.
var myArray = new Array("1", "2", "3");
myArray.reverse();
// transposes the array so that myArray = [ "3", "2", "1" ]


//sort() sorts the elements of an array.
var myArray = new Array("Wind", "Rain", "Fire");
myArray.sort();
// sorts the array so that myArray = [ "Fire", "Rain", "Wind" ]



//**Useful methods for arrays:

var people = ["dave", "liz", "tyler", "matt", "matt", "dave", "steve", "liz", "steve"];

people.join(" | ")
'dave | liz | tyler | matt | matt | dave | steve | liz | steve'

people.join(" & ");
'dave & liz & tyler & matt & matt & dave & steve & liz & steve'

people.push("Tyler");
10
    > people['dave',
        'liz',
        'tyler',
        'matt',
        'matt',
        'dave',
        'steve',
        'liz',
        'steve',
        'Tyler']


people.slice(0, 3);
['dave', 'liz', 'tyler']

people.slice(-3);
['liz', 'steve', 'Tyler']

people.slice(-6, -3);
['matt', 'dave', 'steve']


// Accessing multi dimensional array elements is quite similar to one-dimension arrays . They are accessed by using [index][index]..... (number of them depends upon the number of arrays deep you want to go inside).
newArray = [];
var multidimensionalArray = new Array([1, 2, 3], [4, 5, 6], [7, 8, 9])
for (var i = 0; i < multidimensionalArray.length; i++) {
    for (var j = 0; j < multidimensionalArray.length; j++) {
        newArray.push(multidimensionalArray[i][j])
    }
}
console.log(newArray); //[ 1, 2, 3, 4, 5, 6, 7, 8, 9 ]
//console.log(multidimensionalArray); //[ [ 1, 2, 3 ], [ 4, 5, 6 ], [ 7, 8, 9 ] ]



var myMultiArray = [
    [1, 2, 3, 4, 5, [1, 2, 3, 4, 5]],
    [6, 7, 8, 9, 10, [1, 2, 3, 4, 6]],
    [11, 12, 13, 14, 15, [1, 2, 3, 4, 5]],
    [16, 17, 18, 19, 20, [1, 2, 3, 4, 5]]
];
console.log(myMultiArray[1][5][4]); // Outputs 6 , the value in the last element of the last element of the second element of myMultiArray.
console.log(myMultiArray[3][5][2]); //3


//Find the largest number in array

var array = [3, 5, 6, 76, 90, 4444, 2, 20000, -45];
var currentMax = array[0]
for (var i = 0; i < array.length; i++) {
    if (array[i] > currentMax) {
        currentMax = array[i]
    }
}
console.log(currentMax)
