//This functions returns an array with words longer than the second parameter. The first argument is a string. 

function filterLongWords(str, length) {
    var longestWordsArray = [];
    var arrayOfWords = str.split(" ");
    for (var i = 0; i < arrayOfWords.length; i++) {
        if (arrayOfWords[i].length > length) {
            longestWordsArray.push(arrayOfWords[i]);
        };
    };

    return longestWordsArray;

};

console.log(filterLongWords("Hello my name is Echeverria Onofreeeeeessss", 10));
console.log(filterLongWords("first second third fourth fifth", 5));
