/*============================================;
Title: Exercise 3.3
Author: Cory Gilliam
Date: 22 Aug 2019;
Modified By:
Description: Advanced Routing
===========================================*/

// Require express, http library, pathvar express = require('express');
var express = require('express');
var http = require('http');
var path = require('path');
var logger = require('morgan');

// Store the express app and port number in variables
var app = express();
var port = 3001;

// Set the location for ejs template files
app.set('views', path.resolve(__dirname, 'views'));

// Set the views engine
app.set('view engine', 'ejs');

// Set Morgan format string
app.use(logger('dev'));

// Response to homepage request
app.get('/', function (request, response) {
  response.render('index', {
    productId: 'Click a link below to see advanced routing'
  });
});

// Response to dynamic request
app.get('/:productId', function (request, response) {
  var productId = parseInt(request.params.productId, 10);
  response.render('index', {
    productId: 'Product Id: ' + productId
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
