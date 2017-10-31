var express = require('express');
var http = require('http');
var app = express();

app.get('/', (req, res, next)=>{
	res.send("hello, world!!!!!!!");
})

var server = http.createServer(app);
server.listen(8080);
console.log("the server is listening");