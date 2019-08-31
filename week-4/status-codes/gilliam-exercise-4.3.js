/*============================================;
Title: Exercise - 4.3
Author: Cory Gilliam
Date: 31 Aug 2019;
Modified By:
Description: Status Code Example
===========================================*/

/*
  URI Paths
    /ok
    /unauthorized
    /forbidden
    /not-found
    /not-allowed
    /server-error
    /not-implemented
    /unavailable
 */

// Require express, http library, pathvar express = require('express');
var express = require('express');
var http = require('http');

// Store the express app and port number in variables
var app = express();
var port = 8080;

// Response to 200 request
app.get('/ok', function (request, response) {
  response.status(200);
  response.json({
    error: 'Good to go on this end. The rest is up to you. - The Avengers(2012)'
  })
});

// Response to 401 request
app.get('/unauthorized', function (request, response) {
  response.status(401);
  response.json({
    error: 'There are redundancies to prevent unauthorized usage. - Iron Man 2(2010)'
  })
});

// Response to 403 request
app.get('/forbidden', function (request, response) {
  response.status(403);
  response.json({
    error: 'The use of it on a student is, regrettably, forbidden. However... - Harry Potter and the Goblet of Fire(2005)'
  })
});

// Response to 404 request
app.get('/not-found', function (request, response) {
  response.status(404);
  response.json({
    error: 'I think I found a way home. - Inception(2010)'
  })
});

// Response to 405 request
app.get('/not-allowed', function (request, response) {
  response.status(405);
  response.json({
    error: 'You are free to use any methods necessary... - Star Wars: The Empire Strikes Back(1980)'
  })
});

// Response to 500 request
app.get('/server-error', function (request, response) {
  response.status(500);
  response.json({
    error: 'The emperor\'s made a critical error and the time for our attack has come. - Star Wars: Return of the Jedi(1983)'
  })
});

// Response to 501 request
app.get('/not-implemented', function (request, response) {
  response.status(501);
  response.json({
    error: 'Your request to implement the provisions of phase one, - Star Trek VI: The Undiscovered Country(1991)'
  })
});

// Response to 501 request
app.get('/unavailable', function (request, response) {
  response.status(501);
  response.json({
    error: 'Roger, 154. Backup unavailable. - Give me your piece. - RoboCop(1987)'
  })
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
