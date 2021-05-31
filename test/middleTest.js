const middle = require('../middle');
const assertArraysEqual = require('../assertArraysEqual');

console.log(middle([1, 2, 3, 4, 5]));
console.log(middle([1, 2, 3, 4, 5, 6, 7, 8, 9 ,10]));
assertArraysEqual(middle([1, 2, 3, 4, 5]), [3]);
assertArraysEqual(middle([1, 2, 3, 4, 5, 6, 7, 8, 9]), [7]);
assertArraysEqual(middle([1,2,3,4]), [2,3]);