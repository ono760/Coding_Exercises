// The flat and mountain functions can “see” the variable called result, since they are inside the function that defines it. 
// But they cannot see each other’s count variables since they are outside each other’s scope.

var landscape = function() {
    var result = "";
    
    var flat = function(size) {
        for (var count = 0; count < size; count++)
            result += "_";
    };

    var mountain = function(size) {
        result += "/";
        for (var count = 0; count < size; count++)
            result += "'";
        result += "\\";
    };

    flat(3);
    mountain(4);
    flat(6);
    mountain(1);
    flat(1);

    return result;
};

console.log(landscape());
// → ___/''''\______/'\_
