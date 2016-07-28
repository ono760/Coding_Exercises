function ABCheck(string) {
    var splitSent = string.split('');
    for (var i = 0; i < splitSent.length; i++) {
        if (splitSent[i] === 'a' || 'A') {
            if (splitSent[i + 4] === 'b' || "B") {
                return true
            } else {
                false
            }
        }
    };

};

//returns true if AB are separated by 3 spaces
console.log(ABCheck("Lane borrowed"));
