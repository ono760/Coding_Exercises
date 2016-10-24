// Given a string, you have to return a string in which
// each character (case-sensitive) is repeated once.
// if anything but a string is passed to the function, 
// return "Ruh roh! That isn't a string!"

// Good Luck!

// DONE?? Do it with a RegEx! (a 2 line solution is possible)

// function doubleChar(string){
// 	var newString = "";
// 	if(typeof string !== 'string'){
// 		return ("Ruh roh! That isn't a string");
// 	};

// 	for(var i = 0; i<string.length; i++){
// 		newString += string[i].repeat(2);
// 	};

// 	return newString;
// };

//Another solution:
function doubleChar(str) {
  if (typeof str === "string") return str.replace(/(.)/g, "$1$1")
  return "Ruh roh! That isn't a string!"
}

console.log(doubleChar("String")); // ==> "SSttrriinngg"
console.log(doubleChar("Hello World")); // ==> "HHeelllloo  WWoorrlldd"
console.log(doubleChar("1234!_ ")); // ==> "11223344!!__  "

