// eslint-disable-next-line no-undef, no-unused-vars
const { NotImplementedError } = require("../extensions/index.js");

/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
function sortByHeight(arr) {
  const numbers = arr.filter((num) => num !== -1);
  const sortedNumbers = numbers.sort((a, b) => a - b);

  const result = arr.map((num) =>
    num === -1 ? -1 : sortedNumbers.shift()
  );

  return result;
}

// eslint-disable-next-line no-undef
module.exports = {
  sortByHeight,
};
