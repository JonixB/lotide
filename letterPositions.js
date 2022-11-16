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

const letterPositions = function(sentence) {
  const results = {};
  let counter = 0;
  for (let char of sentence){
    if (char !== ' ') {
      if (results[char]) {
        results[char].push(counter);
      } else {
        results[char] = [];
        results[char].push(counter);
      }
    }
    counter += 1;
  }
  return results;
};

console.log(letterPositions("lighthouse in the house"));