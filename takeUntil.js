const eqArrays = function(first, second) {
  let check = true;
  //check length of arrays
  if (first.length !== second.length) {
    check = false;
  }
  //if length is same
  for (let i = 0; i < first.length; i++) {
    if (first[i] !== second[i]) {
      check = false;
    }
  }
  return check;
};

const assertArraysEqual = function(actual, expected) {
  
  if (eqArrays(actual, expected)) {
    console.log(`✅✅✅Assertion passed: ${actual} === ${expected}`);
    
    
  } else {
    console.log(`❌❌❌Assertion failed: ${actual} !== ${expected}`);
  }
};

const takeUntil = function(array, callback) {
  // return slice of array with elements taken from beginning until callback provided returns a truthy value
  const results = [];//store slice of array elements
  for (let item of array) {
    let check = true;
    if (!callback(item)) {
      check = false;
      results.push(item);
    } //else {
    //break;
    //}
    if (check) {
      return results;
    }
  }
  return results;
};

const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const results1 = takeUntil(data1, x => x < 0);
console.log(results1);
assertArraysEqual(results1, [  1, 2, 5, 7, 2]);

console.log('---');

const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
const results2 = takeUntil(data2, x => x === ',');
console.log(results2);
assertArraysEqual(results2, [ "I've", 'been', 'to', 'Hollywood']);