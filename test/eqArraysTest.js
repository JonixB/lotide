const assert = require('chai').assert
const eqArrays = require('../eqArrays');

describe("#eqArrays", () => {
  it("returns true when given the same exact array", () => {
    assert.deepEqual(eqArrays(words, ["Yo Yo", "Lighthouse", "Labs"]), true);
  });

  it("returns false when not given the same exact array", () => {
    assert.deepEqual(eqArrays(words, ["Yo Yo", "Lighthouse", "Lab"]), false);
  });
});

const words = ["Yo Yo", "Lighthouse", "Labs"];

