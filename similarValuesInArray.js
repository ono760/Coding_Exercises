//Given two arrays, find the similar values between both and return those 
//similar values in an array. Do not have duplicate values in the return array

//Ex: findSimilar([1,2,false,[2,3],{foo:'bar'},[5,6],'hi'],[0,2,[5,6],true,'hi',2,1,{foo:'bar'},{bar:'foo'}])
// -> [1,2,{foo:'bar'},[5,6],'hi']

var arrayOne = [1, 2, false, [2, 3], { foo: 'bar' },[5, 6], 'hi'];
var arrayTwo = [0, 2, [5, 6], true, 'hi', 2, 1, { foo: 'bar' }, { bar: 'foo' }];


function findSimilar(arrayOne, arrayTwo) {
    var hash = {};
    var similarities = [];

    arrayOne.forEach(function(el) {
        if (typeof el === 'object' && !Array.isArray(el)) {
            var key = JSON.stringify(el);
            console.log(key);
            if (!hash[key]) {
                hash[key] = 1;
            }
        } else {
            if (!hash[el]) {
                hash[el] = 1;
            }
        }
    });

    arrayTwo.forEach(function(el) {
        if (typeof el === 'object' && !Array.isArray(el)) {
            var key = JSON.stringify(el);
            if (hash[key]) {
                similarities.push(el);
                delete hash[key];
            }
        } else {
            if (hash[el]) {
                similarities.push(el);
                delete hash[el];
            }
        }
    });

    return similarities;
}

findSimilar(arrayOne, arrayTwo);
// -> [1,2,{foo:'bar'},[5,6],'hi']
