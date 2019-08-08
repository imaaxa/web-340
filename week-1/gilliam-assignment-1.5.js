/*
============================================
; Title:  assignment-1.5.js
; Author: Cory Gilliam
; Date:   6 Aug 2019
; Modified By:
; Description: Recreate the Node.js Server Example
;===========================================
*/

// Start program

// The header file, & output, to be included with all JS programs for this course/cohort.
const header = require('../gilliam-header.js');
console.log(header.display('Cory', 'Gilliam', 'Assignment 1.5'));

// Variables
var http = require('http');

// Functions
function processRequest(req, res) {
  var body = 'If we are to be successful, this will need to be handled with tact, and respect, and no small degree of charm... which is why you will leave the talking to me. -Gandalf';
  var contentLength = body.length;
  res.writeHead(200, {
    'Content-Length': contentLength,
    'Content-Type': 'text/plain'
  });
  res.end(body);
}

var s = http.createServer(processRequest);
s.listen(8080);

// End program
