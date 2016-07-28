function fibonnaci(number){
	var previous = 1;
	var current = 1;

	for (var i = 1; i < number; i++){
		var newFibNumber = previous + current;
		previous = current;
		current = newFibNumber;
	};

	return current;
};

console.log(fibonnaci(6)); //13