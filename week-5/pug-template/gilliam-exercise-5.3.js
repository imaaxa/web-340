/*============================================;
Title: Exersise - 5.3
Author: Cory Gilliam
Date: 4 Sep 2019;
Modified By:
Description: Pug render Example.
===========================================*/

// Require express, http library, pathvar express = require('express');
var express = require('express');
var http = require('http');
var path = require('path');
var pug = require('pug');

// Store the express app and port number in variables
var app = express();
var port = 8080;

// Set up view engine
app.set('views', path.resolve(__dirname, 'views'));
app.set('view engine', 'pug');

app.get('/', function(request, response) {
  response.render('index', {
    message: '"So do all who live to see such times. But that is not for them to decide. All we have to decide is what to do with the time that is given us." -Gandalf The Fellowship of the Ring'
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
