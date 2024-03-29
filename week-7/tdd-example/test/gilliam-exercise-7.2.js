/*============================================;
Title: Exersise - 7.2
Author: Cory Gilliam
Date: 19 Sep 2019;
Modified By:
Description: TDD in Action
===========================================*/

// Start program

// The header file, & output, to be included with all JS programs for this course/cohort.
const header = require('../../../gilliam-header');
console.log(header.display('Cory', 'Gilliam', 'Exersise - 7.2'));

var assert = require('assert');

// Describe the specivications
describe('String#split', function () {

  // Specification with a title and code to run
  it('should return an array of fruits', function () {
    assert(Array.isArray('Apple,Orange,Mango'.split(',')));
  });
});

// Returns an array made from passed CSV string
function getFruits(str) {
  return str.split(',');
}

// Make function available for testing
module.exports = getFruits;
