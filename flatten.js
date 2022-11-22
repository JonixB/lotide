const flatten = function(arrToFlatten) {
  let flattenedArray = [];
  for (let x = 0; x < arrToFlatten.length; x++) {
    if (Array.isArray(arrToFlatten[x])) {
      for (let y = 0; y < arrToFlatten[x].length; y++) {
        flattenedArray.push(arrToFlatten[x][y]);
      }
    } else {
      flattenedArray.push(arrToFlatten[x]);
    }
  }
  return flattenedArray;
};

module.exports = flatten;