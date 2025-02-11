const { NotImplementedError } = require("../extensions/index.js");

/**
 * Create transformed array based on the control sequences that original
 * array contains
 *
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 *
 * @example
 *
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 *
 */
function transform(arr) {
  // check if it's an array
  if (!Array.isArray(arr)) {
    throw new Error("'arr' parameter must be an instance of the Array!");
  }
  // check if it's an empty array
  if (arr.length === 0) {
    return [];
  }

  const result = [];

  for (let i = 0; i < arr.length; i += 1) {
    let arrayIndex = arr[i];

    if (arrayIndex === "--double-next" && i === arr.length - 1) {
      continue;
    } else if (arrayIndex === "--double-next") {
      result.push(arr[i + 1]);
    } else if (
      (i === 0 && arrayIndex === "--double-prev") ||
      (i === arr.length - 1 && arrayIndex === "--discard-next")
    ) {
      continue;
    } else if (arrayIndex === "--double-prev") {
      result.push(arr[i - 1]);
    } else if (arrayIndex === "--discard-next") {
      i += 2;
    } else if (arrayIndex === "--discard-prev") {
      result.pop();
    } else {
      result.push(arr[i]);
    }
  }
  return result;
}

module.exports = {
  transform,
};
