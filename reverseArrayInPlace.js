//reverseArrayInPlace, does what the reverse method does: it modifies the array given as argument in order to reverse its elements. 
//reverse array in place means "do it desctructively"

var reverseInPlace = function(array) {
    return Array.prototype.map.call(array, function(el) {
        return el;
    }).reverse();
};

console.log(reverseInPlace(["A", "B", "C", "D"])); // → ["D",C", "B", "A"];