//Binding can be done with the .call function of Function.prototype and it can also be reduced using [].slice.call(arguments) instead of Array.prototype.slice.call. Anyway, it can be simplified using bind.

var unboundSlice = Array.prototype.slice;
var slice = Function.prototype.call.bind(unboundSlice);

function list() {
    return slice(arguments);
};

var list1 = list(1, 2, 3); // [1, 2, 3]

console.log(list1);
