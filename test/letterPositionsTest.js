const letterPositions = require('../letterPositions');
const assert = require('chai').assert;

describe('#letterPositions', () => {
  it('returns [2,3] for indices of "l" of "hello"', () => {
    assert.deepEqual(letterPositions("hello").l, [2,3]);
  });

  it('returns [3,5,15,18] for indices of "h" of "lighthouse in the house"', () => {
    assert.deepEqual(letterPositions("lighthouse in the house").h, [3,5,15,18]);
  });

});