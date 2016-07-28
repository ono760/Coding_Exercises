// Write a function that takes a string as input and reverse only the vowels of a string.

// Example 1:
// Given s = "hello", return "holle".

// Example 2:
// Given s = "wookiE", return "wEikoo".


// function reverseVowels(string) {
//     var vowels = { 'a': 1, 'e': 1, 'i': 1, 'o': 1, 'u': 1 };
//     var found = [];
//     var stringArray = string.split('');

//     for (var i = 0; i < stringArray.length; i++) {
//         if (vowels[stringArray[i].toLowerCase()]) {
//             found.push(stringArray[i]);
//         }
//     };

//     for (var j = 0; j < stringArray.length; j++) {
//         if (vowels[stringArray[j].toLowerCase()]) {
//             stringArray[j] = found.pop();
//         } 
//     }

//     return stringArray.join('');

// };

//Another solution:

function reverseVowels(s) {

    var vowels = { 'a': 1, 'e': 1, 'i': 1, 'o': 1, 'u': 1 };
    var found = [];
    var lowerCase = s.toLowerCase();
    var strArray = lowerCase.split('');

    //finds vowels in order
    for (var i = 0; i < strArray.length; i++) {
        var currentChar = strArray[i];

        if (vowels[currentChar]) {
            found.push(s[i]); //original casing
        }
    }

    //swappnig vowerl orders
    var strBuilder = "";
    for (var j = 0; j < s.length; j++) {
        var currentChar = strArray[j];

        if (vowels[currentChar]) {
            strBuilder += found.pop();
        } else {
            strBuilder += s[j];
        }
    }
    return strBuilder;
}



console.log(reverseVowels('hello'));
console.log(reverseVowels('wookiE'));
