"use strict"

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
    "2,14,141.8,SanFrancisco",
];

function getHost(str) {
    return str.split(',')[0];
};

function paginate(num, results) {
    var pageResults = [];
    var history = [];
    var queue = [];

    for (var i = 0; i < results.length; i++) {
        if (history.length === num) {
            history = [];
            pageResults.push('');

            while (history.indexOf(getHost(queue[0])) === -1) {
                let queueItem = queue.shift()
                let queueHost = getHost(queueItem);
                history.push(queueHost);
                pageResults.push(queueItem);
            };
        };

        let currentHost = getHost(results[i]);
        if (history.indexOf(currentHost) > -1) {
            queue.push(results[i]);
        } else {
            pageResults.push(results[i]);
            history.push(currentHost);
        };
    };

    if (queue.length > 0) {
        while (queue.length > 0) {
            if (history.length === num) {
                history = [];
                pageResults.push('');
            }
            let queueItem = queue.shift()
            let queueHost = getHost(queueItem);
            history.push(queueHost);
            pageResults.push(queueItem);
        };
    };

    return pageResults;
};

paginate(num, results)
