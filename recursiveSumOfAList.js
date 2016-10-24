var theList = [1, 2, 3, 4];

function sumList(list) {
    var n = list.length;
    console.log(n);
    if (n === 0) {
        return 0;
    } else {
        return list[0] + sumList(list[1..n - 1])
    };
};

console.log(sumList(theList));
