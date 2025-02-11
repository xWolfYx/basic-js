const { NotImplementedError } = require("../extensions/index.js");

/**
 * Create a repeating string based on the given parameters
 *
 * @param {String} str string to repeat
 * @param {Object} options options object
 * @return {String} repeating string
 *
 *
 * @example
 *
 * repeater('STRING', { repeatTimes: 3, separator: '**',
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, options) {

  const string = String(str);
  // destructure the object to assign default values
  const {
    repeatTimes = 1,
    separator = "+",
    addition = "",
    additionRepeatTimes = 1,
    additionSeparator = "|",
  } = options;

  const additionStr = String(addition);
  // create string of repeated words
  const repeatedAddition = Array(additionRepeatTimes)
    .fill(additionStr)
    .join(additionSeparator);

  // create repeated main word and add repeated words
  const result = Array(repeatTimes)
    .fill(string + repeatedAddition)
    .join(separator);

  return result;
}

module.exports = {
  repeater,
};
