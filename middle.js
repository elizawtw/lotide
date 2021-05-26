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
  
    if(!eqArrays(actual, expected)) { 
    console.log(`❌❌❌Assertion failed: ${actual} !== ${expected}`);
    
  } else {
    console.log(`✅✅✅Assertion passed: ${actual} === ${expected}`);
}
}

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
console.log(middle([1, 2, 3, 4, 5]));
console.log(middle([1, 2, 3, 4, 5, 6, 7, 8, 9 ,10]));
//assertArraysEqual(eqArrays(middle([1, 2, 3, 4, 5]), [3]), true);
//assertArraysEqual(eqArrays(middle([1, 2, 3, 4, 5, 6, 7, 8, 9]), [7]), true);
assertArraysEqual(middle([1,2,3,4]), [1,3]);