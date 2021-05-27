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
};

const assertArraysEqual = function(actual, expected) {
  
    if(eqArrays(actual, expected)) { 
    console.log(`✅✅✅Assertion passed: ${actual} === ${expected}`);
    
  } else {
    
    console.log(`❌❌❌Assertion failed: ${actual} !== ${expected}`);
}
}


const letterPositions = function(sentence) {
 // const newSentence = sentence.split(" ").join("");
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

  console.log(results)
  return results;
};

assertArraysEqual(letterPositions("hello").e, [1]);