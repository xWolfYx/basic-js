const { NotImplementedError } = require("../extensions/index.js");

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 *
 * @example
 *
 * const directMachine = new VigenereCipheringMachine();
 *
 * const reverseMachine = new VigenereCipheringMachine(false);
 *
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 *
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 *
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 *
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 *
 */
class VigenereCipheringMachine {
  constructor(isDirect = true) {
    this.isDirect = isDirect;
    this.alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  }
  encrypt(string, key) {
    if (!string || !key) {
      throw new Error("Incorrect arguments!");
    }
    string = string.toUpperCase();
    key = key.toUpperCase();
    let result = "";
    let keyIndex = 0;

    for (let i = 0; i < string.length; i += 1) {
      let char = string[i];

      if (this.alphabet.includes(char)) {
        let shift = this.alphabet.indexOf(key[keyIndex % key.length]);
        let newChar = this.alphabet[(this.alphabet.indexOf(char) + shift) % 26];

        result += newChar;
        keyIndex += 1;
      } else {
        result += char;
      }
    }
    return this.isDirect ? result : result.split("").reverse().join("");
  }
  decrypt(string, key) {
    if (!string || !key) {
      throw new Error("Incorrect arguments!");
    }
    string = string.toUpperCase();
    key = key.toUpperCase();
    let result = "";
    let keyIndex = 0;

    for (let i = 0; i < string.length; i += 1) {
      let char = string[i];

      if (this.alphabet.includes(char)) {
        let shift = this.alphabet.indexOf(key[keyIndex % key.length]);
        let newChar =
          this.alphabet[(this.alphabet.indexOf(char) - shift + 26) % 26];

        result += newChar;
        keyIndex += 1;
      } else {
        result += char;
      }
    }
    return this.isDirect ? result : result.split("").reverse().join("");
  }
}

module.exports = {
  VigenereCipheringMachine,
};
