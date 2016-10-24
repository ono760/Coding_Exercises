// Description:

// Given a hash of letters and the number of times they occur, recreate 
// all of the possible anagram combinations that could be created using 
// all of the letters, sorted alphabetically.

// The inputs will never include numbers, spaces or any special characters, 
// only lowercase letters a-z.

// E.g. get_words({2=>["a"], 1=>["b", "c"]}) => 
// [
// "aabc", "aacb", "abac", "abca", "acab", 
// "acba", "baac", "baca", "bcaa", "caab", 
// "caba", "cbaa"
// ]

var hash = { 2: ["a"], 1: ["b", "c"] };

function getWords(hash) {
    words = createWord(hash);
    console.log(words);
    result = allAnagrams(words);
    return sortAlphabetically(result);
};

var createWord = function(hash) {
    var words = '';
    for (var key in hash) {
        var numberOfTimes = key;
        for (var repetitions = 1; repetitions <= key; repetitions++) {
            hash[key].map(function(el) {
                words = words + el;
            });
        }
    }
    return words;
};

var allAnagrams = function(string) {
    var anagrams = {};
    var recurse = function(anag, string) {
        if (string === '')
            anagrams[anag] = 1;

        for (var i = 0; i < string.length; i++)
            recurse(anag + string[i], string.slice(0, i) + string.slice(i + 1));
    };
    recurse('', string);
    return Object.keys(anagrams);
};

var sortAlphabetically = function(result) {
    return result.sort(function(a, b) {
        if (a < b) return -1;
        if (a > b) return 1;
        return 0;
    });
};

