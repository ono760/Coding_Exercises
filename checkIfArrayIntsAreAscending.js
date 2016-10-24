// A function receives an array of positive integers as input. The function should
// determine whether the numbers are in ascending order. Assume all inputs are valid.
//Ex: 
// inAscOrder([1,2,3,34]) -> returns true;
// inAscOrder([1,2,34,3]) -> returns false;
// PART TWO
// Write more tests! Test for invalid inputs, etc. 


function inAscOrder(arr) {
    for (var i = 1; i < arr.length; ++i) {
        if (arr[i] < arr[i - 1]) {
            return false;
        };
    };

    return true;
};


console.log(inAscOrder([1, 2, 3, 34])); // -> returns true;
console.log(inAscOrder([1, 2, 34, 3])); // -> returns false;
