// Create a function mostLikely which compares two probabilities, returning true if the first one is most likely otherwise false.
// For this exercise probability is expressed as two numbers separated by a colon e.g. a probability of 1 in 3 will be 1:3.
// So:
// mostLikely('1:3','1:2') will return false as 1 in 3 is less likely than 1 in 2.

function mostLikely(probability1, probability2) {
    probability1 = probability1.split(':');
    probability2 = probability2.split(':');
    return probability1[0] / probability1[1] > probability2[0] / probability2[1];

};

console.log(mostLikely('1:3', '1:2')); // false
