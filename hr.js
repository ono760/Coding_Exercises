var myArray = ["Onofre Echeverria", "ono.ucsb"];
var cutName = function(string) {
    indivi_words = string.split(" ");
    return indivi_words;
};

var myData = { fullName: cutName(myArray[0]), skype: cutName(myArray[1]), github: "ono760" };

console.log(" ");
console.log("Here is my contact information: ");
console.log(" ");
console.log("Name: " + myData.fullName);
console.log("Skype: " + myData.skype);
console.log("Github: " + myData.github);
