var reverseArray = function(array) {
    var reversed = [];
    for (var i = array.length - 1; i >= 0; i--) {
        reversed.push(array[i]);
    };

    return reversed;
};

console.log(reverseArray(["A", "B", "C", "D"]));
// → ["D",C", "B", "A"];
