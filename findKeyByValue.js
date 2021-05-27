const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅Assertion passed: ${actual} === ${expected}`);
  } else {
    console.log(`❌❌❌Assertion failed: ${actual} !== ${expected}`);
  }
   
};
const findKeyByValue = function(obj, movie) {
  //loop through object properties
  const keys = Object.keys(obj);
  console.log(keys);
  for (let key of keys) {
    // check if if the value we're looking for
    // if yest return the key
    if (obj[key] === movie) {
      return key;
    }
  }
  return false; //if not found return false
};

const bestTVShowsByGenre = {
  sci_fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama:  "The Wire"
};

assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);