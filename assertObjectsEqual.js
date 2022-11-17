const eqObjects = function(object1, object2) {
  if (Object.keys(object1).length !== Object.keys(object2).length) {
    return false;
  } else {
    for (let key in object1) {
      if (object2[key]) { //checking if the key in object 1 exists in object 2
        if (Array.isArray(object1[key]) && Array.isArray(object2[key])) {
          if (!eqArrays(object1[key], object2[key])) { //checks if the two keys contains arrays
            return false;
          } 
        } else {
          if (object1[key] !== object2[key]) { //checking if value of the same key in object 1 and 2 are the same
            console.log('object 1 and 2', object1[key], object2[key])
            return false;
          }
        }
      }
    }
    return true; //returns true if it passes everything
  }
};

const eqArrays = function(arrayOne, arrayTwo) {
  if (arrayOne.length !== arrayTwo.length) {
    return false;
  }
  for (let x = 0; x < arrayOne.length; x++) {
    if (arrayOne[x] !== arrayTwo[x]) {
      return false;
    }
  }
  return true;
};

const assertObjectsEqual = function(actual, expected) {
  const inspect = require('util').inspect;
  if (eqObjects(actual, expected)) {
    console.log(`${String.fromCodePoint(0x2705)} Assertion Passed: ${inspect(actual)} === ${inspect(expected)} ${String.fromCodePoint(0x2705)}`);
  } else {
    console.log(`${String.fromCodePoint(0x274C)} Assertion Failed: ${inspect(actual)} !== ${inspect(expected)} ${String.fromCodePoint(0x274C)}`);
  }
};

const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
assertObjectsEqual(ab, ba); // => true

const abc = { a: "1", b: "2", c: "3" };
assertObjectsEqual(ab, abc);

const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
assertObjectsEqual(cd, dc); // => true

const cd2 = { c: "1", d: ["2", 3, 4] };
assertObjectsEqual(cd, cd2); // => false