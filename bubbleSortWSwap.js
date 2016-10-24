//This is a bubble sort implementation using a swap helper function.

var array = [1, 4, 6, 3, 2, 50, 25, 51, 33, 21, 1000];

function swap(array, index1, index2) {
    var temp = array[index1];
    array[index1] = array[index2];
    array[index2] = temp;
};

function bubbleSort(array) {

    var stop;

    for (var i = 0; i < array.length; i++) {
        for (var j = 0, stop = array.length - i; j < stop; j++) {
            if (array[j] > array[j + 1]) {
                swap(array, j, j + 1);
            };
        };
    };

    return array;
};

console.log(bubbleSort(array)); //[ 1, 2, 3, 4, 6, 21, 25, 33, 50, 51, 1000 ]
