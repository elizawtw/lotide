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



const map = function(array, callback) {
  
  const results = [];
  for (let item of array) {
    results.push(callback(item));

  }
  return results;
};

const words = ["ground", "control", "to", "major", "tom"];
const results1 = map(words, word => word[0]);
assertArraysEqual(["g", "c", "t", "m", "t"], results1);

const names = [
  {name: "tom", age: 33},
  {name: "sienna", age: 1},
  {name: "ryan", age: 35},
  {name: "mia", age: 3}];
const howOld = map(names, num => num.age);
assertArraysEqual([33, 1, 35, 3], howOld);

const itemsWeNeed = [
  {item: "apple", quantity: 3},
  {item: "chicken", quantity: 5},
  {item: "book", quantity: 1}
];

const supplyForTwoMonths = map(itemsWeNeed, x => x.quantity * 2);
assertArraysEqual([6, 10, 2], supplyForTwoMonths);