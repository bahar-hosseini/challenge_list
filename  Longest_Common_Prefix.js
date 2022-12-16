//leetcode 14. Longest Common Prefix

let longestCommonPrefix = function (strs) {
  let longestCommonPrefix = '';
  if (strs.length === 1) {
    return strs[0];
  }
  let lengthMin = strs.reduce((prev, curr) =>
    prev.length < curr.length ? prev.length : curr.length
  );

  for (let i = 0; i < lengthMin; i++) {
    let current = strs[0][i];
    for (let j = 0; j < strs.length; j++) {
      if (strs[j][i] !== current) {
        return longestCommonPrefix;
      }
    }
    longestCommonPrefix += current;
  }

  return longestCommonPrefix;
};
const strs = ['flower', 'flow', 'flight'];
console.log(longestCommonPrefix(strs));
