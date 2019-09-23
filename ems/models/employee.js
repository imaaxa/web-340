// Required
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// Define the schema
var employeeSchema = new Schema({
  firstName: String,
  lastName: String
});

// Define employees model
var Employee = mongoose.model('employee', employeeSchema);

// Expose the model
module.exports = Employee;
