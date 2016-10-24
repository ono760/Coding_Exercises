//This is an implementation of bubble sort using a loop. 

var unorderedArr = [34, 203, 3, 746, 200, 984, 198, 764, 9];

function bubbleSort(unorderedArr) {
    var swapped;
    do {
        swapped = false;
        for (var i = 0; i < unorderedArr.length - 1; i++) {
            if (unorderedArr[i] > unorderedArr[i + 1]) {
                var temp = unorderedArr[i];
                unorderedArr[i] = unorderedArr[i + 1];
                unorderedArr[i + 1] = temp;
                swapped = true;
            };
        };

    } while (swapped);
};

bubbleSort(unorderedArr);
console.log(unorderedArr); //[ 3, 9, 34, 198, 200, 203, 746, 764, 984 ]
