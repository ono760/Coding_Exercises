// Write a function named removeDuplicates which takes a string and removes 
// all duplicate characters in the String. Here are some examples:  

//   removeDuplicates('AABB'); // 'AB'
//   removeDuplicates('AaAaBbBb'); // 'AaBb'
//   removeDuplicates('cAtCaT'); // 'cAtCaT'

function removeDuplicates(string) {
    var noDuplicates = "";
    var letterSeen = {};

    for (var i = 0; i < string.length; i++) {
        var currentLetter = string[i];
        if (!letterSeen[currentLetter]) {
            noDuplicates += currentLetter;
            letterSeen[currentLetter] = true;
        };
    };

    return noDuplicates;
};


console.log(removeDuplicates('AABB')); // 'AB'
console.log(removeDuplicates('AaAaBbBb')); // 'AaBb'
console.log(removeDuplicates('cAtCaT')); // 'cAtCaT'
console.log(removeDuplicates('OnooffFrReeeeE')); //OnofFrReE
