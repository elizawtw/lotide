
const assertArraysEqual = require('./assertArraysEqual');

const middle = function(array) {
  let middleArray = [];
  const len = array.length;
  const middleIndex = Math.floor(len / 2);
  if (len <= 2) {
    return middleArray;
  } else if (len % 2 === 0) {
    middleArray.push(array[middleIndex - 1]);
    middleArray.push(array[middleIndex]);
    
  } else {
    middleArray.push(array[middleIndex]);
  }
  return middleArray;
};


module.exports = middle;