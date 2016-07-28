// /*/** 
//  * This function should return true if the input string is a palindrome
//  * and should return false in all other cases. 
//  */

function isPalindrome(string) {

    if (string.length <= 1) {
        return true;
    };

    if (string[0] !== string[string.length - 1]) {
        return false;
    };

    return isPalindrome(string.slice(1, string.length - 1));


};

console.log(isPalindrome("onno"));
