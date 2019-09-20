/*============================================;
Title: Exersise - 7.3
Author: Cory Gilliam
Date: 19 Sep 2019;
Modified By:
Description: Chai Example
===========================================*/

// Start program

// The header file, & output, to be included with all JS programs for this course/cohort.
const header = require('../../../gilliam-header');
console.log(header.display('Cory', 'Gilliam', 'Exersise - 7.2'));

// File to include
var fruits = require('../gilliam-fruits');

// Require chai
var chai = require('chai');
var assert = chai.assert;

// Describe the specivications
describe('fruits', function () {

  // Specification with a title and code to run
  it('should return an array of fruits', function () {
    var f = fruits('Apple,Orange,Mango');
    assert(Array.isArray(f));
  });

});
