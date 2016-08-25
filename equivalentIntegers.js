// “Write a function that determines whether two integers are equal without using any comparison operators.”

function equal(a, b) {
    return !(a - b); // returns true only if (a - b) === 0
};

console.log(equal(100,100)) //true
console.log(equal(2,4))//false
console.log(equal(4,2));