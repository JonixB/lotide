const words = ["ground", "control", "to", "major", "tom"];

const eqArrays = function(arrayOne, arrayTwo) {
  for (let x = 0; x < arrayOne.length; x++) {
    if (arrayOne[x] !== arrayTwo[x]) {
      return false;
    }
  }
  return true;
};

const assertArrayEqual = function(arrayOne, arrayTwo) {
  if (eqArrays(arrayOne,arrayTwo)) {
    console.log(`${String.fromCodePoint(0x2705)} Assertion Passed: ${arrayOne} === ${arrayTwo} ${String.fromCodePoint(0x2705)}`);
  } else {
    console.log(`${String.fromCodePoint(0x274C)} Assertion Failed: ${arrayOne} !== ${arrayTwo} ${String.fromCodePoint(0x274C)}`);
  }
};

const map = function(array, callback) {
  const results = [];
  for (let item of array) {
    results.push(callback(item));
  }
  return results;
}

const results1 = map(words, word => word[0]);
console.log(results1);

assertArrayEqual(results1, ['g', 'c', 't', 'm', 't']);