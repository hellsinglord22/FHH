/* jshint esnext: true */ 

// libraries to include 
var express = require('express'); 
var http = require('http'); 
var app = express(); 
var server = http.createServer(app).listen(3000); 
var io = require('socket.io')(server); 

// serve the content of the public directory 
app.use(express.static('public')); 

console.log(`listening on port 3000`);