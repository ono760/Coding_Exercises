// I LIKE BIG NUMS AND I CANNOT LIE
// Write:
// function biggest(nums)
// that given an array of numbers >= 0, will arrange them 
// such that they form the biggest number. 
// For example:
// biggest([1, 2, 3]) === '321'
// biggest([3, 30, 34, 5, 9]) === '9534330'
// The results will be large so make sure to return a string.

function biggest(nums) {

    var biggestNumber;
    var currentBig;
    var orderedNums = [];

    for (var i = 0; i < nums.length; i++) {
        currentBig = nums[i];
        if (currentBig > nums[i + 1]) {
            currentBig = currentBig;
            orderedNums.push(currentBig)
        }
        // else{
        // 	currentBig = nums[i];
        // 	orderedNums.push(currentBig);
        // }

    }; //end of for loop

    return orderedNums;

}; //end of biggest

console.log(biggest([3, 30, 34, 5, 9]));
