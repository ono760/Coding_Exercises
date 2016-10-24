function hanoi(disks, from, temp, to) {
    var n = disks.length;
    if (n > 1) {
        towers(disks[1..n - 1], from, to, temp)
    }
    console.log("Move ", disks[0], " from ", from, " to ", to, "\n")
    if (n > 1) {
        hanoi(disks[1..n - 1], temp, from, to)
    }
}


console.log(hanoi(10, "A", "B", "C"))
// console.log(towers([4, 3, 2, 1], "A", "B", "C"))
