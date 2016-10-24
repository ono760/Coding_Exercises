//This function finds the number of times that a character appears in a string. 

function chars(s) {

    var total = {};
    for (var i = 0; i < s.length; i++) {
        var curLetter = s[i].toLowerCase();
        if (total[curLetter]) {
            total[curLetter]++;
        } else {
            total[curLetter] = 1;
        }
    }
    return total;

}

console.log(chars("onofF"))
