const { NotImplementedError } = require("../extensions/index.js");

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  let result = "";
  let counter = 1;
  for (let i = 0; i < str.length; i += 1) {
    if (str[i] === str[i + 1]) {
      counter += 1;
    } else {
      result += (counter > 1 ? counter : "") + str[i];
      counter = 1;
    }
  }
  return result;
}

module.exports = {
  encodeLine,
};
