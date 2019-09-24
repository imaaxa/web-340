/*============================================;
Title: EMS
Author: Cory Gilliam
Date: 4 Sep 2019;
Modified By:
Description: Employee Records
===========================================*/

// Require express, http library, pathvar express = require('express');
var express      = require('express');
var http         = require('http');
var path         = require('path');
var logger       = require('morgan');
var bodyParser   = require('body-parser');
var cookieParser = require('cookie-parser');
var csrf         = require('csurf');
var helmet       = require('helmet');
var Employee     = require('./models/employee');

// mLab Connection
var mongoose = require('mongoose');

// Database connection
var mongoDB = 'mongodb+srv://testuser:Zzxcvbnm@buwebdev-cluster-1-3umfh.mongodb.net/test?retryWrites=true&w=majority';
mongoose.connect(mongoDB, {
  useMongoClient: true
});
mongoose.Promise = global.Promise;

var db = mongoose.connection;

db.on('error', console.error.bind('MongoDB connected error:'));

db.once('open', function () {
  console.log('Application connected to mLab MongoDB instance');
});

// Set up csrf protection
var csrfProtection = csrf({
  cookie: true
});

// Store the express app and port number in variables
var app = express();
var port = 8080;

// Disable framework notification
app.disable('x-powered-by');

// Respond to css file requests
app.use('/css', express.static('css'));

// Respond to images file requests
app.use('/images', express.static('images'));

// Set up view engine
app.set('views', path.resolve(__dirname, 'views'));
app.set('view engine', 'ejs');

// Set up Morgan, helmet, body-parser, csrf, and cookie-parser
app.use(logger('short'));
app.use(helmet.xssFilter());
app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(cookieParser());
app.use(csrfProtection);
app.use(function(request, response, next) {
  var token = request.csrfToken();
  response.cookie('XSRF-TOKEN', token);
  response.locals.csrfToken = token;
  next();
});

// Model
var employee = new Employee({
  firstName: 'Tony',
  lastName: 'Stark'
});

// Respond to Post request
app.post('/process', function(request, response) {
  console.log(request.body.txtName);
  response.redirect('/');
});

// Respond to Homepage request
app.get('/', function(request, response) {
  response.render('index', {
    pageData: {
      title: 'Home page',
      template: 'body'
    },
    body: [
      { p: 'Welcome to ' + employee.firstName + ' ' + employee.lastName + '\'s User Interface application.'},
      { p: 'Soon all the pieces will be here and you can assemble your team.'}
    ]
  });
});

// Respond to Homepage request
app.get('/list', function (request, response) {
  response.render('index', {
    pageData: {
      title: 'User List',
      template: 'list'
    },
    users: getUsers()
  });
});

// Respond to Homepage request
app.get('/user/:userid', function (request, response) {
  var userId = parseInt(request.params.userid);

  response.render('index', {
    pageData: {
      title: 'User',
      template: 'view'
    },
    user: getUsers(userId)//user
  });
});

// Respond to Homepage request
app.get('/new', function (request, response) {
  var today = new Date().toISOString().substr(0, 10);
  response.render('index', {
    pageData: {
      title: 'New User',
      template: 'new'
    },
    formData: {
      action: '#',
      method: 'post',
      submit: 'Submit',

      fields: [
        {
          template: 'formInput',
          type: 'text',
          label: 'First Name',
          machineName: 'firstName',
          placeHolder: 'First Name',
          row: 'open'
        },
        {
          template: 'formInput',
          type: 'text',
          label: 'Last Name',
          machineName: 'lastName',
          placeHolder: 'Last Name',
          row: 'closed'
        },
        {
          template: 'formInput',
          type: 'text',
          label: 'Position',
          machineName: 'position',
          placeHolder: 'Position',
          row: 'open'
        },
        {
          template: 'formInput',
          type: 'date',
          label: 'Start Date',
          machineName: 'startDate',
          currentDate: today,
          row: 'closed'
        },
        {
          template: 'formCheckbox',
          type: 'checkbox',
          label: 'Work Shift',
          row: 'none',
          buttons: [
            {
              label: 'First',
              machineName: 'first',
              name: 'shift',
              value: 'first'
            },
            {
              label: 'Second',
              machineName: 'second',
              name: 'shift',
              value: 'second'
            },
            {
              label: 'Third',
              machineName: 'third',
              name: 'shift',
              value: 'third'
            }
          ]
        }
      ]
    }
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

// Simulate getting data, all or single
function getUsers(index) {
  var users = [
  {
    userId: 0,
    firstName: 'Tony',
    lastName: 'Stark',
    position: 'Ironman',
    startDate: 'May 2, 2008',
    shift: 'First'
    },
  {
    userId: 1,
    firstName: 'Clint',
    lastName: 'Barton',
    position: 'Hawkeye',
    startDate: 'May 6, 2011',
    shift: 'Second'
    },
  {
    userId: 2,
    firstName: 'Natasha',
    lastName: 'Romanoff',
    position: 'Black Widow',
    startDate: 'May 7, 2010',
    shift: 'Third'
    },
  ];

  if (typeof index != 'undefined') {
    return users[index];
  } else {
    return users;
  }
}
