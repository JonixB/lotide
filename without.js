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

const without = function(source, itemsToRemove) {
  let withoutArray = [];
  for (let value of source) {
    for (let x = 0; x < itemsToRemove.length; x++) {
      if (value !== itemsToRemove[x] && x === itemsToRemove.length - 1) {
        withoutArray.push(value);
      }
    }
  }
  return withoutArray;
};