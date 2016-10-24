function subString(str1, str2) {
    var sortedStr1 = str1.split("").sort().join("");
    if (str2.length < str1.length) {
        return false;
    };

    for (var i = 0; i < str2.length; i++) {
        var sortedStr2 = str2.substring(i, i + str1.length).split("").sort().join("");
        if (sortedStr1 === sortedStr2) {
            return true;
        };

    };

    return false;
};


console.log(subString("abc", "liecaccabbac"));
