console.log(Object); // [Function: Object]

// ALL objects inherit functionality from Object
// We can see that Object.hasOwnProperty and obj.hasOwnProperty
// point to the same location in memory.

var obj = {
    hasOwnProperty: function() {
        console("The world is ending");
    }
};
var ob2 = new Object();

console.log(Object.hasOwnProperty === obj.hasOwnProperty);

console.log(Object.hasOwnProperty === obj.hasOwnProperty);

console.log(Object.hasOwnProperty === ob2.hasOwnProperty);
