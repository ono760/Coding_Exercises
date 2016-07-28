function dashInsert(string) {
    var arr = string.split("");

    for (var i = 0; i < string.length; i++) {
        if (arr[i] % 2 !== 0 && arr[i + 1] % 2 !== 0) {
            arr[i] += '-';
        }
    }
    var joinedArray = arr.join('');
    return joinedArray.slice(0, joinedArray.length - 1);
}
console.log(dashInsert("454793"));
