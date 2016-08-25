/*The splice() method changes the content of an array by removing existing elements and/or adding new elements.

Syntax
array.splice(start, deleteCount[, item1[, item2[, ...]]])*/

/*Parameters

start
Index at which to start changing the array (with origin 0). If greater than the length of the array, actual starting index will be set to the length of the array. If negative, will begin that many elements from the end.
deleteCount
An integer indicating the number of old array elements to remove. If deleteCount is 0, no elements are removed. In this case, you should specify at least one new element. If deleteCount is greater than the number of elements left in the array starting at start, then all of the elements through the end of the array will be deleted.
If deleteCount is omitted, deleteCount will be equal to (arr.length - start).
item1, item2, ...
The elements to add to the array, beginning at the start index. If you don't specify any elements, splice() will only remove elements from the array.
Returns

An array containing the deleted elements. If only one element is removed, an array of one element is returned. If no elements are removed, an empty array is returned.*/


//The following script illustrates the use of splice():

var myFish = ['angel', 'clown', 'mandarin', 'surgeon'];

// removes 0 elements from index 2, and inserts 'drum'
var removed = myFish.splice(2, 0, 'drum');
// myFish is ['angel', 'clown', 'drum', 'mandarin', 'surgeon']
// removed is [], no elements removed
console.log(removed);

// myFish is ['angel', 'clown', 'drum', 'mandarin', 'surgeon'] 
// removes 1 element from index 3
removed = myFish.splice(3, 1);
// myFish is ['angel', 'clown', 'drum', 'surgeon']
// removed is ['mandarin']

// myFish is ['angel', 'clown', 'drum', 'surgeon'] 
// removes 1 element from index 2, and inserts 'trumpet'
removed = myFish.splice(2, 1, 'trumpet');
// myFish is ['angel', 'clown', 'trumpet', 'surgeon']
// removed is ['drum']

// myFish is ['angel', 'clown', 'trumpet', 'surgeon'] 
// removes 2 elements from index 0, and inserts 'parrot', 'anemone' and 'blue'
removed = myFish.splice(0, 2, 'parrot', 'anemone', 'blue');
// myFish is ['parrot', 'anemone', 'blue', 'trumpet', 'surgeon']
// removed is ['angel', 'clown']

// myFish is ['parrot', 'anemone', 'blue', 'trumpet', 'surgeon'] 
// removes 2 elements from index 2
removed = myFish.splice(myFish.length - 3, 2);
// myFish is ['parrot', 'anemone', 'surgeon']
// removed is ['blue', 'trumpet']
