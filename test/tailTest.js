const tail = require('../tail');
const assert = require('chai').assert;

const words = ["Yo Yo", "Lighthouse", "Labs"];

describe("#tail", () => {
  it("returns [2, 3] for [1, 2, 3]", () => {
    assert.deepEqual(tail([1, 2, 3]), [2, 3]);
  });

  it("returns ['Lighthouse', 'Labs'] for ['Yo Yo', Lighthouse', 'Labs']", () => {
    assert.deepEqual(tail(words), ['Lighthouse', 'Labs']);
  });

  it("returns [] for ['Lighthouse']", () => {
    assert.deepEqual(tail(['Lighthouse']), []);
  });
});