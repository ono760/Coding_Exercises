//Write a function that returns true if a string has unique characters. If not, return false. 

var isUnique = function(str) {
    var obj = {};
    for (var i = 0; i < str.length; i++) {
        var curr = str[i]
        if (obj[curr]) {
            obj[curr]++
        } else {
            obj[curr] = 1;
        };
    };
    for (var key in obj) {
        if (obj[key] !== 1) {
            return false;
        }
    };

    return true;
};

console.log(isUnique("abcddd")); //false
console.log(isUnique("abc")); //true
