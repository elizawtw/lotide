const eqArrays = require('./eqArrays');

const assertArraysEqual = require('./assertArraysEqual');


const letterPositions = function(sentence) {
 
  const results = {};
  // logic to update results here
  for (let i = 0; i < sentence.length; i++) {
    if (sentence[i] !== ' ' && sentence[i] !== '.' && sentence[i] !== '&' && sentence[i] !== '.' &&sentence[i] !== '?') {
      if (results[sentence[i]]) {
        results[sentence[i]].push(i);
      } else {
        results[sentence[i]] = [i];
      }
    } 
    
    }

  return results;
};
module.exports = letterPositions;

assertArraysEqual(letterPositions("hello").e, [1]);