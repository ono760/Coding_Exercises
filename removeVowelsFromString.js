// Your task is to write a function that takes 
// a string and return a new string with all vowels removed.

// function removeVowels(string) {
//     var noVowelString = "";
//     var lowerCaseString = string.toLowerCase();

//     for (var i = 0; i < lowerCaseString.length; i++) {
//         if (lowerCaseString[i] !== 'a' && lowerCaseString[i] !== 'e' && lowerCaseString[i] !== 'i' && lowerCaseString[i] !== 'o' && lowerCaseString[i] !== 'u') {
//             noVowelString += lowerCaseString[i];
//         };
//     };

//     return noVowelString;
// };


//Another solution:
function removeVowels (string) {
  return string.replace(/[aeiou]/gi, '');
}
console.log(removeVowels("HEllOO onofre How are you doing?"));

