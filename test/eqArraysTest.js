const assertEqual = require('../assertEqual');
const eqArrays = require('../eqArrays');

const words = ["Yo Yo", "Lighthouse", "Labs"];

assertEqual(eqArrays(words, ["Yo Yo", "Lighthouse", "Labs"]), true);