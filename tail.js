const tail = function(arr) {
  let tail = [];
  if (arr.length < 2) {
    return tail;
  } else {
    tail = arr.slice(1);
    return tail;
  }
};

module.exports = tail;