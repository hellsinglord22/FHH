/* jshint esnext: true */ 

// libraries to include 
var express = require('express'); 
var http = require('http'); 
var app = express(); 
var server = createServer(app).listen(3000); 
var io = require('socket.io')(server); 