// Write a function that takes a string and returns an object 
// with the vowels in that string as keys and their value is how many times 
// they occurred in the string. 
//The counter function should not care about case.
// The keys in the object should all be lowercase.
// Ex: countVowels('aAbcdade') -> {a:3,e:1}

function countVowels(string) {
    var vowels = string.match(/[aeiou]/gi || []); //returns an array
    var vowelsObject = {};

    vowels.forEach(function(letter) {
        var currentLetter = letter.toLowerCase();
        if (vowelsObject[currentLetter]) {
            vowelsObject[currentLetter]++;
        } else {
            vowelsObject[currentLetter] = 1;
        }
    })
    return vowelsObject;

};

console.log(countVowels("aAbcdadooeuuuuu"));
