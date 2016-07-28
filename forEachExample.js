// Without lodash, you have to create your own implementation of forEach.

function forEach(arr, callback) {
    for (var i = 0; i < arr.length; i++) {
        callback(arr[i], i, arr);
    };

    return arr;
};

forEach(["one", "two", "three"], function(val) {
    console.log(val);
});


//we can pass our function as a value: 

function forEach(array, action) {
    for (var i = 0; i < array.length; i++) {
        action(array[i]);

    }
};

forEach(['ono', 'uc', 'sd', 'di'], console.log);


//Often, you don't pass a predefined function forEach but create a function value on the spot instead: 

var numbers = [1, 2, 4, 5, 6, 6];
var sum = 0;

forEach(numbers, function(number) {
    sum += number;

});
console.log(sum); //24
