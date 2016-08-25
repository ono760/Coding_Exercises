    //Body Parsing with http:

"use strict"
var http = require('http');
const PORT = 8080;

function handleRequest(request, response) {
    if (request.method == 'POST') {
        var body = '';
        request.on('data', function(data) {
            body += data;
        });
        request.on('end', function() {
            response.end(body);
        });
    } else {
        response.end("Wasn't a POST");
    }
}
var server = http.createServer(handleRequest);
server.listen(PORT, function() {
    console.log("Server listening on: http://localhost:%s", PORT);
});
