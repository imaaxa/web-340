/*============================================;
Title: Exercise 2.3
Author: Cory Gilliam
Date: 13 Aug 2019;
Modified By:
Description: routes
===========================================*/

// Require express, http library
var express = require('express');
var http = require('http');

// Store the express app and port number in variables
var app = express();
var port = 8080;

// Respond to a call to the  page
app.get('/', function(request, response) {
  response.end('Welcome to the homepage!\n');
});

// Respond to a call to the  page
app.get('/about', function(request, response) {
  response.end('Welcome to the about page!\n');
});

// Respond to a call to the  page
app.get('/contact', function(request, response) {
  response.end('Welcome to the contact page!\n');
});

// Respond to incoming request by loging to console and returning Hello World
app.use(function(request, response) {
  response.statusCode = 404;
  response.end('404!\n');
});

// Start a server on port
http.createServer(app).listen(port);
