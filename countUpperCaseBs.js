/*Write a function countBs that takes a string as its only argument and returns a number that indicates 
how many uppercase “B” characters are in the string.*/

var countBs = function(string) {

    var numberOfBs = 0;

    i = 0;
    while (i < string.length) {
        if (string[i] === "B") {
            numberOfBs += 1;
        }
        i++;
    };

    return numberOfBs;
};
