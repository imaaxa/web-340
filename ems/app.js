/*============================================;
Title: EMS
Author: Cory Gilliam
Date: 23 Sep 2019;
Version: 2.0.0
Modified By:
Description: Node.js: Employee Records
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

/* ----- Database section ----- */
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
/* ----- End Database section ----- */

// Set up csrf protection
var csrfProtection = csrf({
  cookie: true
});

// Store the express app and port number in variables
var app  = express();
app.set('port', process.env.PORT || 8080);

// Disable framework notification
app.disable('x-powered-by');

/* ----- Set section ----- */
// Set up view engine
app.set('views', path.resolve(__dirname, 'views'));
app.set('view engine', 'ejs');

/* ----- Use section ----- */
// Respond to css file requests
app.use('/css', express.static('css'));

// Respond to images file requests
app.use('/images', express.static('images'));

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

  Employee.find({}, function (error, employees) {
    if (error) throw error;

    response.render('index', {
      pageData: {
        title: "Employee List",
        template: 'list',
        employees: employees
      }
    });
  });
});

// Respond to new employee request
app.get('/new', function (request, response) {
  response.render('index', {
    pageData: {
      title: 'New Employee',
      template: 'new'
    }
  });
});

// Respond to view employee request
app.get('/view', function (request, response) {
  response.redirect('/list');
});

// Respond to view specific employee request
app.get('/view/:queryName', function (request, response) {
  var queryName = request.params.queryName.split(' ');

  var search;
  if (!queryName[0] || !queryName[1]) {
    if(queryName[0]) {
      search = {'firstName' : queryName[0]};
    } else {
      search = {'lastName': queryName[1]};
    }
  } else {
    search = { 'firstName': queryName[0], 'lastName': queryName[1] };
  }

  Employee.find(search, function (error, employee) {
    if (error) throw error;

    if (employee.length > 0) {
      response.render('index', {
        pageData: {
          title: 'Employee Record Search',
          template: 'view',
          employee: employee
        }
      });
    } else {
      response.redirect('/list');
    }
  });
});

// Respond to Post request
app.post('/process', function(request, response) {
  if (!request.body.firstName && !request.body.lastName) {
    response.status(404).send('Entries must have a first name.');
    return;
  }

  // Get the form data
  var firstName = request.body.firstName;
  var lastName = request.body.lastName;

  // Create employee model
  var employee = new Employee({
    firstName: firstName,
    lastName: lastName
  });

  // Save employee model
  employee.save(function(error) {
    if (error) throw error;
    console.log(firstName + ' saved successfully!');
  });

  response.redirect('/');
});

// Respond to unknown request with 404 error
app.use(function (request, response) {
  response.statusCode = 404;
  response.end('404!\n');
});

// Create server on port
http.createServer(app).listen(app.get('port'), function () {
  console.log('Application started on port ' + app.get('port'));
});
