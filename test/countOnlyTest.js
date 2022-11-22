const assert = require('chai').assert
const countOnly = require('../countOnly');

describe("#count only", () => {
  it("returns 1 for  result1 = countOnly(firstNames, { \"Jason\": true, \"Karima\": true, \"Fang\": true, \"Agouhanna\": false })", () => {
    assert.deepEqual(result1["Jason"], 1);
  });

  it("returns undefined for result1 = countOnly(firstNames, { \"Jason\": true, \"Karima\": true, \"Fang\": true, \"Agouhanna\": false })", () => {
    assert.deepEqual(result1["Karima"], undefined);
  });
});

const firstNames = [
  "Karl",
  "Salima",
  "Agouhanna",
  "Fang",
  "Kavith",
  "Jason",
  "Salima",
  "Fang",
  "Joe"
];

const result1 = countOnly(firstNames, { "Jason": true, "Karima": true, "Fang": true, "Agouhanna": false });