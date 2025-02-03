const { NotImplementedError } = require("../extensions/index.js");

/**
 * Create name of dream team based on the names of its members
 *
 * @param {Array} members names of the members
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 *
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
function createDreamTeam(members) {
  // check if the list is an array
  if (!Array.isArray(members)) {
    return false;
  }
  // filter non-string instances
  const validMemberNames = members.filter(
    (member) => typeof member === "string"
  );
  // get trimmed member names and output first letter in upper case
  const sortedMemberList = validMemberNames
    .map((member) => member.trim()[0].toUpperCase())
    .sort();
  // return joined first letters
  return sortedMemberList.join("");
}

module.exports = {
  createDreamTeam,
};
