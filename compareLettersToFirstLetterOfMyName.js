/*
1.	Loop through the string.
2.	Compare each letter to the first letter of your name, and if it sees that letter:
3.	It will push that letter and all the letters that follow it to an array, stopping when the number of letters it pushes are equal to the number of letters in your name.
*/

var text = "Hello Onofre there, I am Ono. Was born and raised \
in Mexico. I go by Ono because is easier for some to \
remember it.";

var myName = "Ono";

var hits = [];
for (var i = 0; i <= text.length; i++) {
    if (text[i] === "O") {
        for (var j = i; j < myName.length + i; j++) {
            hits.push(text[j]);
        };
    };
};

if (hits.length === 0) {
    console.log("Your name wasn't found");
} else {
    console.log(hits);
};
