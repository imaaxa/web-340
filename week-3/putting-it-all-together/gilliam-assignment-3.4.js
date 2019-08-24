/*============================================;
Title: Assignment 3.4
Author: Cory Gilliam
Date: 22 Aug 2019;
Modified By:
Description: Putting it all together
===========================================*/

// Require express, http library, pathvar express = require('express');
var express = require('express');
var http = require('http');
var path = require('path');
var logger = require('morgan');

// Store the express app and port number in variables
var app = express();
var port = 8080;

// Set the location for ejs template files
app.set('views', path.resolve(__dirname, 'views'));

// Set the views engine
app.set('view engine', 'ejs');

// Set Morgan format string
app.use(logger('short'));


// Response to home request
app.get('/', function(request, response) {
  response.render('index', {
    message: 'home'
  });
});

// Response to about request
app.get('/about', function (request, response) {
  response.render('about', {
    message: 'about'
  });
});

// Response to faq request
app.get('/contact', function (request, response) {
  response.render('contact', {
    message: 'contact'
  });
});

// Response to contact request
app.get('/products', function (request, response) {
  response.render('products', {
    message: 'products'
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
