// Create a function accum that takes a string and outputs a string with the following:
// accum("abcd") --> "A-Bb-Ccc-Dddd"
// accum("RqaEzty") --> "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
// accum("cwAt") --> "C-Ww-Aaa-Tttt"


function accum(string) {
    var outputString = "";
    var chars = string.split('');
    chars.forEach(function(char, index) {
        for (var j = 0; j < index + 1; j++) {
            if (j > 0) {
                var letter = chars[index].toLowerCase();
                outputString += letter;
            } else {
                var letter = chars[index].toUpperCase();
                outputString += letter;
            };
        };
        
        if (index < string.length - 1) {
            outputString += '-';
        };
    });

    return outputString;

};

console.log(accum("abcd")); // --> "A-Bb-Ccc-Dddd"
console.log(accum("RqaEzty")) // --> "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
console.log(accum("cwAt")); // --> "C-Ww-Aaa-Tttt"
