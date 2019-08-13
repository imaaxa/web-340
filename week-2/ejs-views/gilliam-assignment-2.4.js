/*============================================;
Title: Exercise 2.4
Author: Cory Gilliam
Date: 13 Aug 2019;
Modified By:
Description: EJS (Embedded JavaScript) view engine
===========================================*/

// Require express, http library, path
var express = require('express');
var http = require('http');
var path = require('path');

// Store the express app and port number in variables
var app = express();
var port = 8080;

// Set the location for ejs template files
app.set('views', path.resolve(__dirname, 'views'));

// Set the views engine
app.set('view engine', 'ejs');

/************************************
 * Routing
 ************************************/

// Respond to a call to the  homepage
app.get('/', function(request, response) {
  response.render('index', {
    title: 'Assignment 2.4',
    pageTitle: 'EJS (Embedded JavaScript) view engine',
    message: 'Welcome to the homepage!\n'
  });
});

// Respond to a call to the  page
app.get('/about', function(request, response) {
  response.render('index', {
    title: 'Assignment 2.4',
    pageTitle: 'EJS (Embedded JavaScript) view engine',
    message: 'Welcome to the about page!\n'
  });
});

// Respond to a call to the  page
app.get('/contact', function(request, response) {
  response.render('index', {
    title: 'Assignment 2.4',
    pageTitle: 'EJS (Embedded JavaScript) view engine',
    message: 'Welcome to the contact page!\n'
  });
});

// Respond to incoming request by loging to console and returning Hello World
app.use(function(request, response) {
  response.statusCode = 404;
  response.end('404!\n');
});

// Start a server on port
http.createServer(app).listen(port);
