// Rotate an array arr in place arr to the right by k steps.

// For example, with n = [1,2,3,4,5,6,7] and k = 3, 
//the array is rotated to [5,6,7,1,2,3,4].
//Make sure not to return a copy of the array.


// function rotateInPlace(array, k){
// 	k = k % array.length;
// 	for(var j = 0; j < k; j++){
// 		var x = array.pop();
// 		array.unshift(x);
// 	};
// 	return array;
// };

//another solution:

function rotateInPlace(arr, k) {

    if (k > arr.length) {
        var temp = Math.floor(k / arr.length);
        k = k - temp * arr.length;
    }

    for (var j = 0; j < k; j++) {
        var x = arr.pop();
        arr.unshift(x);
    }
    return arr;
};



console.log(rotateInPlace([1, 2, 3, 4, 5, 6, 7], 3));
