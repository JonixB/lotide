const eqArrays = require('./eqArrays');

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

module.exports = eqObjects;
