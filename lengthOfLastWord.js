//58. Length of Last Word

/**
 * @param {string} s
 * @return {number}
 */
let lengthOfLastWord = function (s) {
  s = s.trim().split(' ');
  return s[s.length - 1].length;
};
