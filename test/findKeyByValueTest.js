const assert = require('chai').assert
const findKeyByValue = require('../findKeyByValue');

describe("#findKeyByValue", () => {
  it("returns \'the wire\' when given the \'drama\' value to search", () => {
    assert.deepEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
  });

  it("returns \'undefined\' when given the \'That \'70s Show\' value to search", () => {
    assert.deepEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);
  });
});

const bestTVShowsByGenre = { 
  sci_fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama:  "The Wire"
};
