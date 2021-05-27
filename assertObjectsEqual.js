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

const eqObjects = function(object1, object2) {
  const key1 = Object.keys(object1);//[a,b]
  const key2 = Object.keys(object2);//[b,a]
  if (key1.length !== key2.length) {
    return false;
  }
  for (const key of key1) {
    console.log(object1);
    if (Array.isArray(object1[key]) && Array.isArray(object2[key])) {
      let check = eqArrays(object1[key], object2[key]);
      if (check === false) {
        return false;
      }
     
    } else if (!Array.isArray(object1[key]) && !Array.isArray(object2[key])) {
      if (object1[key] !== object2[key]) {
        return false;
      }
    } else {
      return false;
    }
  }
  return true;
};

const assertObjectsEqual = function(actual, expected) {
  console.log(actual);
  const inspect = require('util').inspect;
  if (eqObjects(actual, expected)) {
    console.log(`✅✅✅Assertion passed: ${inspect(actual)} === ${inspect(expected)}`);
    
    
  } else {
    console.log(`❌❌❌Assertion failed: ${inspect(actual)} !== ${inspect(expected)}`);
    
  }

};



const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
assertObjectsEqual(ab, ba); // => true


const abc = { a: "1", b: "2", c: "3" };
assertObjectsEqual(ab, abc); // => false

const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
assertObjectsEqual(cd, dc); // => true

const cd2 = { c: "1", d: ["2", 3, 4] };
assertObjectsEqual(cd, cd2); // => false

const cd3 = { c: [1,2,3,4], d: ["2", 3]};
assertObjectsEqual(cd, cd3);
