// Write a function that flattens an Array of Array objects into a flat Array. 

// Your function must only do one level of flattening. Some examples:

//  flatten([]) // should return []
//  flatten([1, 2, 3]) //should return [1,2,3]
//  flatten([[1, 2, 3], ["a", "b", "c"], [1, 2, 3]]) //should return [1, 2, 3, "a", "b", "c", 1, 2, 3]

function flatten(array){
	var flattenedArray =[];

	for(var outerIndex = 0; outerIndex<array.length; outerIndex++){
		var outerValue = array[outerIndex];
		if(Array.isArray(outerValue)){
			for(var innerIndex = 0; innerIndex<outerValue.length; innerIndex++){
				var innerValue = outerValue[innerIndex];
				flattenedArray.push(innerValue);
			};
		}
		else{
			flattenedArray.push(outerValue);
		}

	};

	return flattenedArray;
};


console.log(flatten([])); // should return []
console.log(flatten([1, 2, 3])); //should return [1,2,3]
console.log(flatten([[3, 4, 5], [[9, 9, 9]], ["a,b,c"] ])); //should return [3, 4, 5, [9, 9, 9], "a,b,c"]
