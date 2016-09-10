//A JS implementation of the Josephus permutation.  

function josephus(counter, people) {
    var idxArr = new Array(people.length).fill(0).map((_, i) => {
        return i;
    });
    var idx = 0;
    var currCount = counter;
    while (idxArr.length > 1) {
        if (idx === idxArr.length) {
            idx = 0;
        };
        currCount--;
        if (currCount === 0) {
            idxArr.splice(idx, 1);
            currCount = counter;
            idx -= 1;
        };

        idx++;
    }
    return people[idxArr[0]];

};

console.log(josephus(3, ["ian", "ono", "nick", "nica", "hal", "bill", "john", "jamie"]));
