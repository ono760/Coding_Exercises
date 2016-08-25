var allNumbers = [2, 12, 3, 17, 233, 21];

var total = function(runningTotal, currentNumber) {
    return runningTotal + currentNumber
};

var removeLessThanTen = function(number) {
    return number > 10
};

console.log('Filter: ', allNumbers.filter(removeLessThanTen))
console.log(allNumbers.filter(removeLessThanTen).reduce(total, 0));

//Note that reduce can return any data type, even an object! Check out this example:
var string = "awesomesauce";
var obj = string.split("").reduce(function(prev, cur) {
    prev[cur] = ++prev[cur] || 1;
    return prev
}, {});

console.log(obj) // {a: 2, c: 1, e: 3, m: 1, o: 1, s: 2, u: 1, w: 1}


//Ex of reduce.
//.reduce takes a callback function and an initial value(where you want to start adding from);
function reduce(array, combine, start) {
    var current = start;
    for (var i = 0; i < array.length; i++)
        current = combine(current, array[i]);
    return current;
}

console.log(reduce([1, 2, 3, 4], function(a, b) {
    return a + b;
}, 0)); // → 10

console.log([0, 1, 2, 3, 4, 100].reduce(function(previousValue, currentValue, currentIndex, array) {
    return previousValue + currentValue;
})); // ->110
