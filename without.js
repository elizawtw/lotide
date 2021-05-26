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
  if(eqArrays(first, second)){
    console.log(`✅✅✅Assertion passed: ${first} === ${second}`);
  } else {
    console.log(`❌❌❌Assertion failed: ${first} !== ${second}`);
}
}

const without = function(first, second) {
  let finalArray = [];
  for (const i of first){
    if (!second.includes(i)){
      finalArray.push(i);
    }
  }
  console.log(finalArray);
  return finalArray;
};


//assertArraysEqual([1,2,3],[1,2]);
const words = ["hello", "world", "lighthouse"];
//without(words, ["lighthouse"]); // no need to capture return value for this test case
const wordsWithoutHello = without(words, ["hello"]);
// // Make sure the original array was not altered by the without function
assertArraysEqual(words, ["hello", "lighthouse"]);