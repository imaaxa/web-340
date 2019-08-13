/*============================================;
Title: Exercise 2.2
Author: Cory Gilliam
Date: 13 Aug 2019;
Modified By:
Description: hello world
===========================================*/

// Require express, http library
var express = require('express');
var http = require('http');

// Store the express app and port number in variables
var app = express();
var port = 8080;

// Respond to incoming request by loging to console and returning Hello World
app.use(function(request, response) {
  console.log('In comes a request to: ' + request.url);
  response.end('Hello World\n');
});

// Start a server on port
http.createServer(app).listen(port);
