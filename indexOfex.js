//The following example uses indexOf() to locate values in an array.

var array = [2, 9, 9];
array.indexOf(2); // 0
array.indexOf(7); // -1
array.indexOf(9, 2); // 2
array.indexOf(2, -1); // -1
array.indexOf(2, -3); // 0

//Finding all the occurrences of an element

var indices = [];
var array = ['a', 'b', 'a', 'c', 'a', 'd'];
var element = 'a';
var idx = array.indexOf(element);
while (idx !== -1) {
    indices.push(idx);
    idx = array.indexOf(element, idx + 1);
};
console.log(indices);
// [0, 2, 4]


//Finding if an element exists in the array or not and updating the array

var veggies = ['potato ', 'tomato ', 'chillies ', 'green-pepper '];

function updateVegetablesCollection(veggies, veggie) {
    if (veggies.indexOf(veggie) === -1) {
        veggies.push(veggie);
        console.log('New veggies collection is : ' + veggies);
    } else if (veggies.indexOf(veggie) > -1) {
        console.log(veggie + ' already exists in the veggies collection.');
    };
};


updateVegetablesCollection(veggies, 'spinach');
updateVegetablesCollection(veggies, 'tomato');
