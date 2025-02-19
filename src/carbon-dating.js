const { NotImplementedError } = require("../extensions/index.js");

const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;

/**
 * Determine the age of archeological find by using
 * given MODERN_ACTIVITY and HALF_LIFE_PERIOD values
 *
 * @param {String} sampleActivity string representation of current activity
 * @return {Number | Boolean} calculated age in years or false
 * in case of incorrect sampleActivity
 *
 * @example
 *
 * dateSample('1') => 22387
 * dateSample('WOOT!') => false
 *
 */
function dateSample(sampleActivity) {
  const inputNum = Number(sampleActivity);
  if (
    typeof sampleActivity !== "string" ||
    !Number.isFinite(inputNum) ||
    inputNum < 0 ||
    inputNum > MODERN_ACTIVITY
  ) {
    return false;
  }

  const decayConstant = Math.log(2) / HALF_LIFE_PERIOD;
  const age = Math.ceil(Math.log(MODERN_ACTIVITY / inputNum) / decayConstant);

  return age === Infinity ? false : age;
}

console.log(dateSample(3));

module.exports = {
  dateSample,
};
