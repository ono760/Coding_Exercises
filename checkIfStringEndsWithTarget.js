// Check if a string (first argument) ends with the given target string (second argument).
// Return a Boolean value
// Examples: 
// confirmEnding("Bastian", "n") -> true
// confirmEnding("Connor", "n") -> false
// confirmEnding("He has to give me a new name", "name") -> true

function confirmEnding(string, target) {
    var lastWord = string.split('').pop();
    if (string.slice(-target.length) === target) {
        return true;
    } else {
        return false;
    };
};

//another solution:
//return target.substring() === string.substring(string.length - target.length);

//Another solution:
function confirmEnding(str, target) {
    var lastWord = str.split(' ').pop();
    return lastWord.slice(-target.length) === target;
};


console.log(confirmEnding("Bastian", "n")); // -> true
console.log(confirmEnding("Connor", "n")); // -> false
console.log(confirmEnding("He has to give me a new name", "name")); // -> true
