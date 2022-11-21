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

module.exports = middle;