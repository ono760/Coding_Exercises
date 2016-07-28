/*takes a second argument that indicates the character that is to be counted. 
 */

var countChar = function(string, charToCount) {

    var numberOfChars = 0;

    i = 0;
    while (i < string.length) {

        if (string[i] === charToCount) {

            numberOfChars += 1;
        };

        i++;
    };

    return numberOfChars;

};

console.log(countChar("kakkerlak", "k")); //output is 4
