// Compare two strings by comparing the sum of their letter-Values (char-Value).
// For comparing treat all letters as UpperCase.

// Empty and null-Strings should be treated as they are equal.
// If the string contains other characters than letters, treat the whole string as it would be empty.

// Examples:

// "AD","BC" -> equal

// console.log("AD".charCodeAt(1));

// "AD","DD" -> not equal

// "gf","FG" -> equal

// "zz1","" -> equal

// "ZzZz", "ffPFF" -> equal

// "kl", "lz" -> not equal

// null, "" -> equal

function compare(s1, s2) {

    if (s1 === '' || s2 === '' || !s1 || !s2 || !(s1.match(/[a-z]/i)) || !(s2.match(/[a-z]/i))) {
        return true;
    };
    var sumOne = 0;
    var sumTwo = 0;
    var upperS1 = s1.toUpperCase();
    var upperS2 = s2.toUpperCase();
    for (var i = 0; i < upperS1.length; i++) {
        sumOne += upperS1.charCodeAt(i);
    };
    for (var j = 0; j < upperS2.length; j++) {
        sumTwo += upperS2.charCodeAt(j);
    };

    if (sumOne === sumTwo) {
        return true;
    } else {
        return false;
    };

};
