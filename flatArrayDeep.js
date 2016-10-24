//Deep flatten array
function flatten(array) {

    var flattened = [];
    for(var outerIdx = 0; outerIdx < array.length; outerIdx++) {
        var outerVal = array[outerIdx];

        if(Array.isArray(outerVal)) {

            flattened = flattened.concat(flatten(outerVal));

        }
        else {
            flattened.push(outerVal);
        }
    }

    return flattened;
};

console.log(flatten([1, [2, [3,[4, [5]]]]])); // => [1,2,3,4,5]
console.log(flatten([[3, 4, 5], [[9, 9, 9]], ["a,b,c"] ])); //should return [3, 4, 5, 9, 9, 9, "a,b,c"]