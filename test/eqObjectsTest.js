const eqObjects = require('../eqObjects');
const assert = require('chai').assert;

describe('#eqObjects', () => {
  it('returns true for ab === ba', () => {
    const ab = { a: "1", b: "2" };
    const ba = { b: "2", a: "1" };
    assert.deepEqual(eqObjects(ab, ba), true);
  });

  it('returns false for ab === abc', () => {
    const ab = { a: "1", b: "2" };
    const abc = { a: "1", b: "2", c: "3" };
    assert.deepEqual(eqObjects(ab, abc), false);
  });
  it('returns true for cd === dc', () => {
    const cd = { c: "1", d: ["2", 3] };
    const dc = { d: ["2", 3], c: "1" };
    assert.deepEqual(eqObjects(cd, dc), true); 
  });

})
