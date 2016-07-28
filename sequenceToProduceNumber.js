// Given a number, try to find a sequence of such additions and multiplications that produce that number. 
// For example, the number 13 could be reached by first multiplying by 3 and then adding 5 twice, whereas the number 15 cannot be reached at all.
//Note that this program doesn’t necessarily find the shortest sequence of operations. It is satisfied when it finds any sequence at all.

function findSolution(target) {
    function find(start, history) {
        if (start === target) {
            return history;
        } else if (start > target) {
            return null;
        } else {
            return find(start + 5, "(" + history + " + 5)") ||
                find(start * 3, "(" + history + " * 3)");
        };
    };

    return find(1, "1");
};

console.log(findSolution(24));
// → (((1 * 3) + 5) * 3)
