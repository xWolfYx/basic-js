const { NotImplementedError } = require("../lib");

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

  [...str].forEach((letter, i) => {
    const nextLetter = str[i + 1];

    if (letter === nextLetter) counter += 1;
    else {
      result += `${counter > 1 ? counter : ""}${letter}`;
      counter = 1;
    }
  });

  return result;
}

module.exports = {
  encodeLine,
};
