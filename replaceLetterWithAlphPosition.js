// Welcome. In this warmup you are required to, given a 
// string, replace every letter with its position in the alphabet.
// If anything in the text isn't a letter, in the alphabet. If anything in the text isn't a letter, ignore it and don't return it. a being 1, b being 2, 
// etc. As an example:

// alphabet_position("The sunset sets at twelve o' clock.")

// Should return "20 8 5 19 21 14 19 5 20 19 5 20 19 1 20 20 
// 23 5 12 22 5 15 3 12 15 3 11"

function alphabetPosition(string){
	var letterPositions = "";
	for(var i =0; i < string.length; i++){
		var letterCode = string.toUpperCase().charCodeAt(i);
		console.log(letterCode);
		 if (letterCode > 64 && letterCode < 91) { //based on ASCII table.  64-91 inclusive.  
            letterPositions += (letterCode - 64) + " "; //if you substract 64, will give you the first letter. 
        };

	};

	return letterPositions;
};

console.log(alphabetPosition("The sunset sets at twelve o' clock."));
console.log(alphabetPosition("Ana"));



