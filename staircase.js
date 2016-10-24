function StairCase(n) {
    var n = parseInt(n);
    for (var i = 0; i < n; i++) {
        var s = "";
        for (var j = 0; j < n; j++) {
            if (n - i - 2 < j) {
                s += "#";
            } else {
                s += " ";
            }
        }
        console.log(s)
    };
};

console.log(StairCase(6))
