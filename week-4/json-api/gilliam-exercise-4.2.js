/*============================================;
Title: Exercise - 4.2
Author: Cory Gilliam
Date: 31 Aug 2019;
Modified By:
Description: JSON API Example
===========================================*/

// Require express, http library, pathvar express = require('express');
var express = require('express');
var http = require('http');

// Store the express app and port number in variables
var app = express();
var port = 8080;

// Response to customer request
app.get('/customer/:id', function(request, response) {
  var id = parseInt(request.params.id, 10);

  // Use id to determing correct response
  switch (id) {
    case 1:
      response.json({
        firstName: 'Harry',
        lastName: 'Potter',
        employeeId: id
      });
      break;

    case 2:
      response.json({
        firstName: 'Hermione',
        lastName: 'Granger',
        employeeId: id
      });
      break;

    case 3:
      response.json({
        firstName: 'Ron',
        lastName: 'Weasley',
        employeeId: id
      });
      break;

    // Send 404 if no id found
    default:
      response.statusCode = 404;
      response.json({
        error: "Resource not found."
      });
      break;
  }
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
