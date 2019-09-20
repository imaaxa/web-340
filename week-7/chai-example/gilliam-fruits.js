/*============================================;
Title: Exersise - 7.3
Author: Cory Gilliam
Date: 19 Sep 2019;
Modified By:
Description: Chai Example
===========================================*/

// Returns an array made from passed CSV string
function fruits(values) {
  return values.split(',');
}

// Make function available for testing
module.exports = fruits;
