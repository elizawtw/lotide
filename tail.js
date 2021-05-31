const assertEqual = require('./assertEqual');

const tail = function(actual) {
  let newArray = [];
  for (let i = 1; i < actual.length; i++) {
    newArray.push(actual[i]);
  }
  return newArray;
};


module.exports = tail;