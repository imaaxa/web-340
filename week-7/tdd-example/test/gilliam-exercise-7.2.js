var assert = require('assert');

describe('String#split', function () {
  it('Should return an array of fruits', function () {
    assert(Array.isArray('Apple,Orange,Mango'.split(',')));
  });
});
