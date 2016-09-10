//This functions returns the name of the lowest age in the array of objects.

function youngestPerson(personArray) {
    var lowestAge = 100;
    var youngestPerson = "";
    for (var i = 0; i < personArray.length; i++) {
        for (var key in personArray[i]) {
            if (personArray[i][key] < lowestAge) {
                lowestAge = personArray[i][key];
                youngestPerson = key;
            };
        };
    };
    return youngestPerson;
};


console.log(youngestPerson([{ tom: 2, bob: 12, ono: 10 }]));
