var num = 5;
var results = [
    "20,7,203.4,Oakland",
    "6,8,202.9,SanFrancisco",
    "6,10,199.8,SanFrancisco",
    "1,16,190.5,SanFrancisco",
    "6,29,185.3,SanFrancisco",
    "7,20,180.0,Oakland",
    "6,21,162.2,SanFrancisco",
    "2,18,161.7,SanJose",
    "2,30,149.8,SanJose",
    "3,76,146.7,SanFrancisco",
    "2,14,141.8,SanFrancisco"
];

function paginate(num, results) {
    var hostArray = [];
    var resultsArray = [];
    for (var i = 0; i < results.length; i++) {
        if ((i + 1) % num === 0) {
            hostArray = [];
            resultsArray.push("");
        }
        var currentHost = results[i].split(',')[0];
        if (hostArray.indexOf(currentHost) === -1) {
            resultsArray.push(results[i])
            hostArray.push(currentHost);
        }
    };

    return resultsArray;
};

console.log(paginate(num, results))
