const { NotImplementedError } = require("../extensions/index.js");

/**
 * There's a list of file, since two files cannot have equal names,
 * the one which comes later will have a suffix (k),
 * where k is the smallest integer such that the found name is not used yet.
 *
 * Return an array of names that will be given to the files.
 *
 * @param {Array} names
 * @return {Array}
 *
 * @example
 * For input ["file", "file", "image", "file(1)", "file"],
 * the output should be ["file", "file(1)", "image", "file(1)(1)", "file(2)"]
 *
 */
function renameFiles(names) {
  // initialize result array
  let result = [];

  names.forEach((name) => {
    let updatedName = name;
    let i = 1;
    // check if the name already exists and add number to it
    while (result.includes(updatedName)) {
      updatedName = `${name}(${i})`;
      i += 1;
    }
    // add updated name to the result array
    result.push(updatedName);
  });
  return result;
}

module.exports = {
  renameFiles,
};
