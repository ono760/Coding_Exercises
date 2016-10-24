// #HTTP Request Warmups


// A good portion of your software career as a web developer will involve getting and sending HTTP requests. 

// The goal of this warm-up series Will be to parse HTTP headers, and turn the given information into useful data stored within an object.

// ##🐾🐾🐾🐾 Part One: GET 🐾🐾🐾🐾

// ### 💡 EXAMPLE:
// If making a GET request to Spotify searching for the the Artist by the name of Bob Dylan, something like the following GET request header will be generated:

// ```
// GET /v1/search?q=bob%20dylan&amp;type=artist HTTP/1.1
// Host: api.spotify.com
// Cache-Control: no-cache
// Postman-Token: e2f09f98-f8e0-43f7-5f0e-b16e670399e2
// ```


// The first line contains 3 parts:

// * the HTTP verb, 
// * the path, 
// * and the protocol.

// The remaining lines are the rest of the header.


// Given this information, your goal will be to write a function that will parse this data to return an object with key value pairs in the following structure:

// ```
// { headers:
//    { Host: ' api.spotify.com',
//      'Cache-Control': ' no-cache',
//      'Postman-Token': ' e2f09f98-f8e0-43f7-5f0e-b16e670399e2' },
//   verb: 'GET',
//   path: '/v1/search?q=bob%20dylan&amp;type=artist',
//   protocol: 'HTTP/1.1' }
// ```

// ### 💡 Note:
// When the the header is passed to your function for any of these exercises, it will be a single string.

// ##🐾🐾🐾🐾 Part Two: POST 🐾🐾🐾🐾

// If making a POST request to some api (Spotify in this case), something like the following POST request header will be generated (note that in practice the POST path will contain more information than in this simplified example):

// ### 💡 EXAMPLE:

// If making a POST request, something like the following POST request will be generated:

// ```
// POST /v1/ HTTP/1.1
// Host: api.spotify.com
// Cache-Control: no-cache
// Postman-Token: f6741a35-c20f-3051-e3f9-301904256b3f
// Content-Type: application/x-www-form-urlencoded

// fish=catfish&dog=dogfish
// ```
// The line after the space in the example is the body of the POST request.

// Modify your earlier function to determine if the string passed as a parameter is a GET or a POST request. 

// * If it is a GET request, do the same behavior as listed in part one.
// * If it is a POST request, add a body object as a value in your response object with a key of body. 
// * In that body object, list all the key value pairs passed in the body of the input string.
// * If POST, output from above example should be:

// ```
// { headers:
//    { Host: ' api.spotify.com',
//      'Cache-Control': ' no-cache',
//      'Postman-Token': ' f6741a35-c20f-3051-e3f9-301904256b3f',
//      'Content-Type': ' application/x-www-form-urlencoded' },
//   verb: 'POST',
//   path: '/v1/search?q=bob%20dylan&amp;type=artist',
//   protocol: 'HTTP/1.1',
//   body: { fish: 'catfish', dog: 'dogfish' } }
// ```

// ##🐾🐾🐾🐾 Part Three: Query 🐾🐾🐾🐾


// Now let's working with a query string! Taking a previous example where something like the following POST request header is generated, pull also pull out the query string into a seperate key/value pair inside the returned object.

// ### 💡 EXAMPLE:

// If making a POST request, something like the following POST request will be generated:

// ```
// GET /v1/search?q=bob%20dylan&amp;type=artist HTTP/1.1
// Host: api.spotify.com
// Cache-Control: no-cache
// Postman-Token: f6741a35-c20f-3051-e3f9-301904256b3f
// Content-Type: application/x-www-form-urlencoded

// fish=catfish&dog=dogfish
// ```
// The parts after the ? in the path are the query parameters

// Modify your earlier function to determine if the string passed as a parameter contains a query string. 

// * if the path contains a query string, grab each key/value pair being queried and add those to a query property inside the response object.

// ```
// { headers:
//    { Host: ' api.spotify.com',
//      'Cache-Control': ' no-cache',
//      'Postman-Token': ' f6741a35-c20f-3051-e3f9-301904256b3f',
//      'Content-Type': ' application/x-www-form-urlencoded' },
//   verb: 'POST',
//   path: '/v1/search?q=bob%20dylan&amp;type=artist',
//   protocol: 'HTTP/1.1',
//   query: { q: 'bob%20dylan', type: 'artist' },
//   body: { fish: 'catfish', dog: 'dogfish' } }
// ```


//Part One


var parseRequest = function(inputString) {
    var request = {};
    request.headers = {};
    var linesArr = inputString.split('\n')
    var firstLine = linesArr[0].split(' ')
    request.verb = firstLine[0]
    request.path = firstLine[1]
    request.protocol = firstLine[2]
    for (var i = 1; i < linesArr.length; i++) {
        var currentLine = linesArr[i];
        var currentKeyValueArray = currentLine.split(':');
        var key = currentKeyValueArray[0];
        var value = currentKeyValueArray[1];
        request.headers[key] = value;
    }

    return request;

};


//Part Two

var parseRequest = function(inputString) {
        var request = {};
        request.headers = {};
        var linesArr = inputString.split('\n')
        var firstLine = linesArr[0].split(' ')
        request.verb = firstLine[0]
        request.path = firstLine[1]
        request.protocol = firstLine[2]

        for (var i = 1; i < linesArr.length - 1; i++) { //catch space. What about spaces between lines?  Could also do while looop
            var currentLine = linesArr[i];
            var currentKeyValueArray = currentLine.split(':');
            var key = currentKeyValueArray[0];
            var value = currentKeyValueArray[1];
            request.headers[key] = value;
        } //end of for loop

        // grab all headers not including the body Matt's version
        /*  var y = 1
            while (linesArr[y+1]) {
            var currentLine = linesArr[y]
            var currentKeyValueArray = currentLine.split(':');
            var key = currentKeyValueArray[0];
            var value = currentKeyValueArray[1];
            request.headers[key] = value;
            y++
          }*/ //

        if (request.verb === "POST") {
            request.body = {};
            var bodyString = linesArr[linesArr.length - 1];
            var bodyStringPairsArray = bodyString.split('&');

            for (var i = 0; i < bodyStringPairsArray.length; i++) {
                var keyValues = bodyStringPairsArray[i].split('=');
                request.body[keyValues[0]] = keyValues[1]
            } // END FOR LOOP

            return request;

        } //end of if
        else {
            return request;
        }

    } //end of parserequest function 

// 🐾🐾🐾 PART THREE 🐾🐾🐾
var parseRequest = function(inputString) {
        var str1 = "GET /v1/search?q=bob%20dylan&amp;type=artist HTTP/1.1\nHost: api.spotify.com\nCache-Control: no-cache\nPostman-Token: e2f09f98-f8e0-43f7-5f0e-b16e670399e2";

        var request = {};
        request.headers = {};
        var linesArr = inputString.split('\n')
        var firstLine = linesArr[0].split(' ')
        request.verb = firstLine[0]
        request.path = firstLine[1]
        request.protocol = firstLine[2]

        for (var i = 1; i < linesArr.length - 1; i++) { //try to catch space. What about spaces between lines?  Could also do while looop
            var currentLine = linesArr[i];
            var currentKeyValueArray = currentLine.split(':');
            var key = currentKeyValueArray[0];
            var value = currentKeyValueArray[1];
            request.headers[key] = value;
        } //end of for loop

        // grab all headers not including the body Matt's version
        /*  var y = 1
            while (linesArr[y+1]) {
            var currentLine = linesArr[y]
            var currentKeyValueArray = currentLine.split(':');
            var key = currentKeyValueArray[0];
            var value = currentKeyValueArray[1];
            request.headers[key] = value;
            y++
          }*/ //

        if (request.path.indexOf('?') !== -1) {
            request.query = {};
            var query = request.path.split('?')[1];
            var queryPairsArr = query.replace('&amp;', '&').split('&');
            for (var i = 0; i < queryPairsArr.length; i++) {
                var keyValuePair = queryPairsArr[i].split('=');
                var key = keyValuePair[0];
                var value = keyValuePair[1];
                request.query[key] = value;
            } // END FOR LOOP

        } // END IF

        if (request.verb === "POST") {
            request.body = {};
            var bodyString = linesArr[linesArr.length - 1];
            var bodyStringPairsArray = bodyString.split('&');
            for (var i = 0; i < bodyStringPairsArray.length; i++) {
                var keyValues = bodyStringPairsArray[i].split('=');
                request.body[keyValues[0]] = keyValues[1]
            } // END FOR LOOP

            return request;

        } //end of if
        else {
            return request;
        }


    } //end of parserequest function
