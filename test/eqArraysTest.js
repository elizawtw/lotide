const eqArrays = require('../eqArrays');
const assert = require('chai').assert;

describe('#eqArrays', () => {
  it('returns true for [1,2,3] === [1,2,3]', () => {
    assert.deepEqual(eqArrays([1,2,3], [1,2,3]), true);
  });
  it('returns false for [1,5,3] === [1,2,3]', () => {
    assert.deepEqual(eqArrays([1,5,3], [1,2,3]), false);
  });
  it('returns false for ["1","5","3"] === ["1",5,"3"]', () => {
    assert.deepEqual(eqArrays(["1","5","3"], ["1",5,"3"]), false);
  });
});

