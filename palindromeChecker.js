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


            //uses slice to keep checking for remaining characters in string. closing in. Think "onoono"
     //once we have compared first o vs last o, we now close in and compare next characters, in this case n. 
    //basically calling the recursion with our new, updated shorter string. 
    //everytime we call, we get closer to the case base. Think of recursions like shrinking/moving towards case base. 