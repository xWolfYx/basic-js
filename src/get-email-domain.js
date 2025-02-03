const { NotImplementedError } = require("../extensions/index.js");

/**
 * Given an email address, return it's domain.
 *
 * @param {String} email
 * @return {String}
 *
 * @example
 * For the input 'prettyandsimple@example.com', the output should be 'example.com'
 *
 */
function getEmailDomain(email) {
  // find the last index of "@"
  const atIndex = email.lastIndexOf("@");
  // slice the rest of the string
  const domain = email.slice(atIndex + 1);
  return domain;
}

module.exports = {
  getEmailDomain,
};
