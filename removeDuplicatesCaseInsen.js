//CI for case insensitive. Removes duplicates taking CI into account.  
function removeDupesCI(string) {

    var lowerCaseString = string.toLowerCase();

    var dupesRemoved = '';
    var letterSeen = {};

    for (var i = 0; i < string.length; i++) {

        var currentLetter = string[i];
        var currentLowerCaseLetter = lowerCaseString[i];

        if (!letterSeen[currentLowerCaseLetter]) {
            dupesRemoved += currentLetter;
            letterSeen[currentLowerCaseLetter] = true;
        }
    };

    return dupesRemoved;

};

console.log(removeDupesCI('AABB')); // 'AB'
console.log(removeDupesCI('AaAaBbBb')); // 'AB'
console.log(removeDupesCI('cAtCaT')); // 'cAt'
console.log(removeDupesCI('OnooffFrReeeeE')); //Onfre
