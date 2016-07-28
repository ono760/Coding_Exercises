// Write a method that returns true if a given parameter is a power of 4, 
// and false if it's not. If parameter is not an Integer (eg String, Array) 
// method should return false as well.
//Also write a recursive version

function powerOf4R(x, checked) {
    if (isNaN(x)) return false;
    if (x < 4) {
        if (!checked) {
            return false;
        } else {
            return x === 1;
        }
    } else {
        checked = true;
        x /= 4;
        return powerOf4R(x, checked);
    }
};

console.log(powerOf4R(5)); //false
console.log(powerOf4R(16)); //true
console.log(powerOf4R(64)); //true
