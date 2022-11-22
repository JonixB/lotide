const letterPositions = function(sentence) {
  const results = {};
  let counter = 0;
  for (let char of sentence){
    if (char !== ' ') {
      if (results[char]) {
        results[char].push(counter);
      } else {
        results[char] = [];
        results[char].push(counter);
      }
    }
    counter += 1;
  }
  return results;
};

module.exports = letterPositions;

