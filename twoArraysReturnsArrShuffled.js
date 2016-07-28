// You have to create a method "compoundArray" which should take as input 
// two int arrays of different length and return one int array with 
// numbers of both arrays shuffled one by one. 
// Example: 
// compoundArray([1,2,3,4,5,6],[9,8,7,6]) => [1,9,2,8,3,7,4,6,5,6];


var arr1 = [1, 2, 3, 4, 5, 6];
var arr2 = [9, 8, 7, 6];

function compoundArray(arr1, arr2) {
    var shuffledArray = [];
    for (var i = 0; i < Math.max(arr1.length, arr2.length); i++) {
        if (!isNaN(arr1[i])) {
            shuffledArray.push(arr1[i]);
        };
        if (!isNaN(arr2[i])) {
            shuffledArray.push(arr2[i]);
        };
    };

    return shuffledArray;
};

console.log(compoundArray(arr1, arr2)); //[1,9,2,8,3,7,4,6,5,6]
