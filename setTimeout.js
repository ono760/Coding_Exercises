// All functions in setTimeout are executed in the global scope
//In the example, the use of the 'this' object inside the setTimeout function refers to the window object, not to myObj.

var highValue=200;
var constantVal=2;

var myObj={
	highValue: 20,
	constantVal: 5,
	calculateIt: function(){
		setTimeout(function(){
			console.log((this.constantVal) * (this.highValue));
		}, 2000);
	}
}

myObj.calculateIt(); //400 'this' object inside the setTimeout function refers to the window object, not to myObj.


