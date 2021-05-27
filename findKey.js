const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅Assertion passed: ${actual} === ${expected}`);
  } else {
    console.log(`❌❌❌Assertion failed: ${actual} !== ${expected}`);
  }
   
};

const findKey = function(obj, callback) {
  const catergories = Object.keys(obj);//catergories stores an array of keys
  
  for (let item of catergories) {
      
    if (callback(obj[item])) {
      return item;
    }
  }
  
};



const test = findKey({
  "Blue Hill": { stars: 1 },
  "Akaleri":   { stars: 3 },
  "noma":      { stars: 2 },
  "elBulli":   { stars: 3 },
  "Ora":       { stars: 2 },
  "Akelarre":  { stars: 3 }
}, x => x.stars === 2); // => "noma"

assertEqual(test, "noma");