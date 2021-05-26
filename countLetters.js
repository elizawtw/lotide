const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅Assertion passed: ${actual} === ${expected}`);
  } else {
    console.log(`❌❌❌Assertion failed: ${actual} !== ${expected}`);
  }
   
};

const countLetters = function(words) {
  const result = {};

  for (let word of words) {
    if (result[word]) {
      result[word] += 1; 
    }
    else {
      result[word] = 1;
    }
  }
  return result;
}

const final = countLetters('terrier');
assertEqual(final["t"], 1);
assertEqual(final["g"], 2);
assertEqual(final["e"], 2);
assertEqual(final["i"], 1);