const assertEqual = require('./assertEqual');

const head = function(actual) {
  for (let i = 0; i < actual.length; i++) {
    return actual[0];
  }

};


module.exports = head;