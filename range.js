//This function finds the range between two numbers. 


function range(start, stop, step) {
    if (typeof stop == 'undefined') {
        stop = start;
        start = 0;
    }

    if (typeof step == 'undefined') {
        step = 1;
    }

    if ((step > 0 && start >= stop) || (step < 0 && start <= stop)) {
        return [];
    }

    var result = [];
    for (var i = start; step > 0 ? i < stop : i > stop; i += step) {
        result.push(i);
    }

    return result;
};

//Another solution:

// function range(start, end, step) {
//     var myArray = [];
//     if (start < 0) {
//         return;
//     } else {
//         if (step < 0) {
//             for (var i = start; i >= end; i += step) {
//                 myArray.push(i);
//             }
//         } else {

//             for (var i = start; i <= end; i += step) {
//                 myArray.push(i);
//             }
//         }
//     }
//     return myArray;
// }

console.log(range(10, 0, -1))
console.log(range(6))
console.log(range(8, 2))
console.log(range(3, 20, 3))
