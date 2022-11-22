const assert = require('chai').assert
const eqObjects = require('../eqObjects');

describe("#eqObjects", () => {
  it("should return true if the arguments passed are the same exact object", () => {
    assert.deepEqual(eqObjects(ab, ba), true);
  });

  it("should return false if the arguments passed are not the same exact object", () => {
    assert.deepEqual(eqObjects(ab, abc), false);
  });
});


const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };


const abc = { a: "1", b: "2", c: "3" };

const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };

const cd2 = { c: "1", d: ["2", 3, 4] };
