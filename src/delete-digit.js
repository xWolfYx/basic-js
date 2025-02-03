const { NotImplementedError } = require("../extensions/index.js");

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  // base number
  let biggestNum = 0;
  // convert to string
  const numString = n.toString();

  for (let i = 0; i < numString.length; i += 1) {
    // get numbers one by one
    const slicedNum = numString.slice(0, i) + numString.slice(i + 1);
    // convert to number
    const result = parseInt(slicedNum);
    // make comparison
    if (result > biggestNum) {
      biggestNum = result;
    }
  }
  return biggestNum;
}

module.exports = {
  deleteDigit,
};
