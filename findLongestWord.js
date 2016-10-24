//This functions finds the longest word in a string:

function findLongestWord(string) {
    var currentWord = "";
    var longestWord = "";
    var arrayOfWords = string.split(" ");

    for (var i = 0; i < arrayOfWords.length; i++) {
        if (arrayOfWords[i].length > currentWord.length) {
            currentWord = arrayOfWords[i];
            longestWord = currentWord;
        }
    };

    return longestWord;
};


console.log(findLongestWord("Hello my name is Echeverria, Onofreeeeeessss"));