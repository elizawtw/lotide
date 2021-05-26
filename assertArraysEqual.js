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

const assertArraysEqual = function(first, second) {
  if(first === second){
    console.log(`✅✅✅Assertion passed: ${first} === ${second}`);
  } else {
    console.log(`❌❌❌Assertion failed: ${first} !== ${second}`);
}
}

assertArraysEqual(eqArrays([1,2,3],[1,2,3]), false)
