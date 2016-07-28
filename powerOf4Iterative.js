// Write a method that returns true if a given parameter is a power of 4, 
// and false if it's not. If parameter is not an Integer (eg String, Array) 
// method should return false as well.
//Also write a recursive version

//iterative solution

function powerOf4(x) {
    if (typeof x !== 'number' || x < 4) {
        return false;
    };

    while (x >= 4) {
        x = x / 4;
    };

    return x === 1;

};

console.log(powerOf4(5)); //false
console.log(powerOf4(16)); //true
