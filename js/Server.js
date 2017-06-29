var server = require('websocket').server, http = require('http');
var fs = require("fs");

var xy_array;

var socket = new server({
    httpServer: http.createServer().listen(3000)
});



socket.on('request', function(request) {
    var connection = request.accept(null, request.origin);

    connection.on('message', function(message) {
        console.log(message.utf8Data);
        connection.sendUTF('hello from the Server');
        setInterval(function() {
            xy_array = fs.readFileSync('Faceposition.txt').toString();
            connection.sendUTF(xy_array);
        }, 20);
    });

    connection.on('close', function(connection) {
        console.log('connection closed');
    });
});
console.log("Webserver is running on Port 63342...");
