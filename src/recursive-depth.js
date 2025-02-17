const { NotImplementedError } = require("../extensions/index.js");

/**
 * Implement class DepthCalculator with method calculateDepth
 * that calculates deoth of nested array
 *
 * @example
 *
 * const depthCalc = new DepthCalculator();
 * depthCalc.calculateDepth([1, 2, 3, 4, 5]) => 1
 * depthCalc.calculateDepth([1, 2, 3, [4, 5]]) => 2
 * depthCalc.calculateDepth([[[]]]) => 3
 *
 */
class DepthCalculator {
  calculateDepth(arr) {
    let result = 1;

    for (let element of arr) {
      if (Array.isArray(element)) {
        const depth = this.calculateDepth(element);

        if (depth + 1 > result) {
          result = depth + 1;
        }
      }
    }
    return result;
  }
}

module.exports = {
  DepthCalculator,
};
