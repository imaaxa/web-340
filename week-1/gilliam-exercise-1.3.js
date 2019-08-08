/*
============================================
; Title:  exercise-1.3.js
; Author: Cory Gilliam
; Date:   6 Aug 2019
; Modified By:
; Description: Recreate the Module Example
;===========================================
*/

// Start program

// The header file, & output, to be included with all JS programs for this course/cohort.
const header = require('../gilliam-header.js');
console.log(header.display('Cory', 'Gilliam', 'Exercise 1.3'));

// Variables
var url = require('url');
var parsedURL = url.parse('https://www.example.com/profile?name=smith');

// Output
console.log(parsedURL.protocol);
console.log(parsedURL.host);
console.log(parsedURL.query);

// End program
