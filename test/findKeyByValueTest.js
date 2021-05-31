const findKeyByValue = require('../findKeyByValue');
const assert = require('chai').assert;

describe('#findKeyByValue', () => {
  it('returns "drama" for genre of "The Wire"', () => {
    const bestTVShowsByGenre = {
      sci_fi: "The Expanse",
      comedy: "Brooklyn Nine-Nine",
      drama:  "The Wire"
    };
 
    assert.equal(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
    
  });
  it('returns "undefined" for genre of "That 70s show"', () => {
    const bestTVShowsByGenre = {
      sci_fi: "The Expanse",
      comedy: "Brooklyn Nine-Nine",
      drama:  "The Wire"
    };
    assert.equal(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);

  
  });
  
});
  
