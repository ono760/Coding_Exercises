//  This function should return true if the input string is a palindrome
//  and should return false in all other cases. 

// Recursive solution:
// uses slice to keep checking for remaining characters in string. closing in. Think "onoono"
// once we have compared first o vs last o, we now close in and compare next characters, in this case n. 
// basically calling the recursion with our new, updated shorter string. 
// everytime we call, we get closer to the case base. Think of recursions like shrinking/moving towards case base.

function isPalindrome(string) {

    var newString = string.toLowerCase().split(" ").join("").split(",").join("").split(".").join("");
    console.log(newString)

    if (newString.length <= 1) {
        return true;
    };

    if (newString[0] !== newString[newString.length - 1]) {
        return false;
    };

    return isPalindrome(newString.slice(1, newString.length - 1));
};



// function isPalindrome(string) {
//     var newString = string.toLowerCase().split(" ").join("").split(",").join("").split(".").join("");
//     var reverse = '';
//     for (var i = newString.length - 1; i >= 0; i--) {
//         reverse += newString[i];
//     }
//     return (reverse === newString.toLowerCase());
// };

console.log(isPalindrome("onno"));
console.log(isPalindrome("Amor, Roma"));
console.log(isPalindrome("race car"));
console.log(isPalindrome("taco cat"));
