/*============================================;
Title: Exercise - 6.3
Author: Cory Gilliam
Date: 10 Sept 2019;
Modified By:
Description: Mongoose example.
===========================================*/

// Require express, http library, pathvar express = require('express');
var express = require('express');
var http = require('http');
var logger = require('morgan');
var mongoose = require('mongoose');

// Database connection
var mongoDB = 'mongodb+srv://testuser:Zzxcvbnm@buwebdev-cluster-1-3umfh.mongodb.net/test?retryWrites=true&w=majority';
mongoose.connect( mongoDB, {
  useMongoClient: true
});
mongoose.Promise = global.Promise;
var db = mongoose.connection;
db.on('error', console.error.bind('MongoDB connected error:'));
db.once('open', function() {
  console.log('Application connected to mLab MongoDB instance');
});

// Store the express app and port number in variables
var app = express();
var port = 8080;

// Set up morgan
app.use(logger('dev'));

// Create server on port
http.createServer(app).listen(port, function () {
  console.log('Application started on port ' + port);
});
