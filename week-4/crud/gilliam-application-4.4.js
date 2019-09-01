/*============================================;
Title: Application - 4.4
Author: Cory Gilliam
Date: 31 Aug 2019;
Modified By:
Description: Demonstrates CRUD operations in a Node.js API.
===========================================*/

// Require express, http library, pathvar express = require('express');
var express = require('express');
var http = require('http');

// Store the express app and port number in variables
var app = express();
var port = 8080;

// Respone to a get request
app.get("/", function(request, response) {
  response.send("API invoked as an HTTP GET request.\n");
});

// Respone to a put request
app.put("/", function(request, response) {
  response.send("API invoked as an HTTP PUT request.\n");
});

// Respone to a post request
app.post("/", function(request, response) {
  response.send("API invoked as an HTTP POST request.\n");
});

// Respone to a delete request
app.delete("/", function(request, response) {
  response.send("API invoked as an HTTP DELETE request.\n");
});

// Respond to incoming request by loging to console and returning Hello World
app.use(function (request, response) {
  response.statusCode = 404;
  response.end('404!\n');
});

// Create server on port
http.createServer(app).listen(port, function () {
  console.log('Application started on port ' + port);
});
