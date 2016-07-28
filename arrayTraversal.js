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
