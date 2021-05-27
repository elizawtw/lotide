const eqArrays = function(first, second){
  let check = true;
  //check length of arrays
  if (first.length !== second.length) {
    check = false;
  }
  //if length is same
  for (let i = 0; i < first.length; i++){
    if (first[i] !== second[i]){
      check = false;
    }
  }
  return check;
}

const assertArraysEqual = function(actual, expected) {
  
    if(eqArrays(actual, expected)) { 
    console.log(`✅✅✅Assertion passed: ${actual} === ${expected}`);
    
    
  } else {
    console.log(`❌❌❌Assertion failed: ${actual} !== ${expected}`);
}
}

assertArraysEqual([1,5,3],[1,2,3]);