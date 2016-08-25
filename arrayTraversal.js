var names = ["rusty", "Momo", "Wyatt"];

function each(array, callback) {
    for (var i = 0; i < array.length; i++) {
        callback(array[i]);
    };
};

each(names, console.log); //rusty, Momo, Wyatt

//we can pass an anonymous function as an argument
var numbers = [3, 7, 22, 39];
each(numbers, function(num) {
    console.log(num * 2);
});


var theArray = [1, 2, 3, 4, 5, 5, 6, 7, 77, 7, 9];

function doubleIt() {
    var doubled = [];
    theArray.forEach(function(el) {
        doubled.push(Math.pow(el, 2))
    })
    return doubled;

}

console.log(doubleIt(theArray));
