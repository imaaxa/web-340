/*============================================;
Title: EMS
Author: Cory Gilliam
Date: 4 Sep 2019;
Modified By:
Description: Employee Records
===========================================*/

// Require express, http library, pathvar express = require('express');
var express = require('express');
var http = require('http');
var path = require('path');
var logger = require('morgan');

// Store the express app and port number in variables
var app = express();
var port = 8080;

// Respond to css file requests
app.use('/css', express.static('css'));

// Respond to images file requests
app.use('/images', express.static('images'));

// Set up view engine
app.set('views', path.resolve(__dirname, 'views'));
app.set('view engine', 'ejs');

// Set up Morgan
app.use(logger('short'));

// Respond to Homepage request
app.get('/', function(request, response) {
  response.render('index', {
    title: 'Home page',
    body: ''
  });
});

// Respond to Homepage request
app.get('/list', function (request, response) {
  response.render('index', {
    title: 'User List',
    users: [
      {
        firstName: 'Tony',
        lastName: 'Stark',
        position: 'Ironman',
        startDate: 'May 2, 2008',
        shift: 'First'
      },
      {
        firstName: 'Clint',
        lastName: 'Barton',
        position: 'Hawkeye',
        startDate: 'May 6, 2011',
        shift: 'Second'
      },
      {
        firstName: 'Natasha',
        lastName: 'Romanoff',
        position: 'Black Widow',
        startDate: 'May 7, 2010',
        shift: 'Third'
      },
    ]
  });
});

// Respond to Homepage request
app.get('/user/:userid', function (request, response) {
  var userId = parseInt(request.params.userid);
  console.log(userId);

  response.render('index', {
    title: 'User',
    user: {
      firstName: 'Tony',
      lastName: 'Stark',
      position: 'Ironman',
      startDate: 'May 2, 2008',
      shift: 'First'
    }
  });
});

// Respond to Homepage request
app.get('/new', function (request, response) {
  var today = new Date().toISOString().substr(0, 10);
  response.render('index', {
    title: 'Home page',
    addUser: true,
    currentDate: today
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
