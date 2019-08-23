/*============================================;
Title: Exercise 3.2
Author: Cory Gilliam
Date: 22 Aug 2019;
Modified By:
Description: Morgan logger
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
    currentMenu: 'home',
    message: 'Welcome to Home page!'
  });
});

// Response to about request
app.get('/test', function (request, response) {
  response.render('index', {
    currentMenu: 'about',
    message: 'Welcome to About page!'
  });
});

// Response to faq request
app.get('/test/home', function (request, response) {
  response.render('index', {
    currentMenu: 'faq',
    message: 'Welcome to FAQ page!'
  });
});

// Response to contact request
app.get('/test/home/1', function (request, response) {
  response.render('index', {
    currentMenu: 'contact',
    message: 'Welcome to Contact page!'
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
