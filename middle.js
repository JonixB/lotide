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

const middle = function(array) {
  let middleElement = [];
  if (array.length < 3) {
    return [];
  }
  if (array.length % 2 !== 0) {
    middleElement.push(array[Math.floor(array.length / 2)]);
    return middleElement;
  }
  middleElement.push(array[Math.floor(array.length / 2 - 1)]);
  middleElement.push(array[Math.floor(array.length / 2)]);
  return middleElement;
};

console.log(assertArrayEqual(middle([]),[]));
console.log(assertArrayEqual(middle([1, 2, 3, 4, 5]),[3]));
console.log(assertArrayEqual(middle([1, 2, 3, 4]),[2, 3]));
console.log(assertArrayEqual(middle([1, 2, 3, 4, 5, 6]),[3, 4]));