//This program loops thru array. It outputs the number of times that a certain name appears in array.

var people = ["David", "Edwin", "Kevin", "Max", "Max", "David", "Steven", "Edwin", "Steven", "Mario"];
var peopleCount = {};

for (var i = 0; i < people.length; i++) {
    var personName = people[i];
    if (peopleCount[personName]) {
        peopleCount[personName] += 1;
    } else {
        peopleCount[personName] = 1;
    };
};

console.log(peopleCount);
