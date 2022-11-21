const tail = require('../tail');
const eqArrays = require('../eqArrays');

const words = ["Yo Yo", "Lighthouse", "Labs"];
// console.log(tail(words)); // no need to capture the return value since we are not checking it
// assertEqual(tail(words), 'Labs');

console.log(eqArrays(tail(words), ['Lighthouse', 'Labs']));