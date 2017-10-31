var express = require('express');
var http = require('http');
var app = express();


app.use(express.static(__dirname + '/public'));

var server = http.createServer(app);
server.listen(8080);
console.log("the server is listening");