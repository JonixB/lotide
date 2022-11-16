const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`${String.fromCodePoint(0x2705)} Assertion Passed: ${actual} === ${expected} ${String.fromCodePoint(0x2705)}`);
  } else {
    console.log(`${String.fromCodePoint(0x274C)} Assertion Failed: ${actual} !== ${expected} ${String.fromCodePoint(0x274C)}`);
  }
};

const countLetters = function(str) {
  let rmvSpace = str.split(' ').join('');
  let letCount = {};
  for (let char of rmvSpace){
    if (letCount[char]) {
      letCount[char] += 1;
    } else {
      letCount[char] = 1;
    }
  }
  return letCount;
};

console.log(countLetters("lighthouse in the house"));