/*============================================;
Title: Exersise - 5.2
Author: Cory Gilliam
Date: 4 Sep 2019;
Modified By:
Description: EJS if…else…render Example.
===========================================*/

// Require express, http library, pathvar express = require('express');
var express = require('express');
var http = require('http');
var path = require('path');

// Store the express app and port number in variables
var app = express();
var port = 8080;

// Set up view engine
app.set('views', path.resolve(__dirname, 'views'));
app.set('view engine', 'ejs');

// Variables
var fruit = [
  'Apple',
  'Blueberry',
  'Orange',
  'Strawberry'
];

// Respone to a root dir request
app.get("/", function (request, response) {
  response.render('index', {
    fruits: fruit
  });
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
