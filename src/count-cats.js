const { NotImplementedError } = require("../extensions/index.js");

/**
 * Given matrix where you have to find cats by ears "^^"
 *
 * @param {Array<Array>} matrix
 * @return {Number} count of cats found
 *
 * @example
 * countCats([
 *  [0, 1, '^^'],
 *  [0, '^^', 2],
 *  ['^^', 1, 2]
 * ]) => 3`
 *
 */
function countCats(matrix) {
  // flatten the array
  const flatArray = matrix.flat();
  // get number of cats
  const numberOfCats = flatArray.filter((cat) => cat === "^^").length;
  return numberOfCats;
}

module.exports = {
  countCats,
};
