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

const assertArraysEqual = function(first, second) {
  if(eqArrays(first, second)){
    console.log(`✅✅✅Assertion passed: ${first} === ${second}`);
  } else {
    console.log(`❌❌❌Assertion failed: ${first} !== ${second}`);
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
console.log(middle([1, 2, 3]));
console.log(middle([1, 2, 3, 4]));
assertArraysEqual(eqArrays(middle([1, 2, 3]), [2]), true);
assertArraysEqual(eqArrays(middle([1, 2, 3, 4]), [2, 3]), true);