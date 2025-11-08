const { NotImplementedError } = require("../lib");

/**
 * Implement class DepthCalculator with method calculateDepth
 * that calculates depth of nested array
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

    arr.forEach((el) => {
      if (Array.isArray(el)) {
        const depth = this.calculateDepth(el);

        if (depth + 1 > result) result = depth + 1;
      }
    });

    return result;
  }
}

module.exports = {
  depthCalculator: new DepthCalculator(),
};
