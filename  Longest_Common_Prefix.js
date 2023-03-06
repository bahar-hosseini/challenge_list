//leetcode 14. Longest Common Prefix

let longestCommonPrefix = function(strs) {
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

//* Method2
let longestCommonPrefix2 = function(strs) {
  if (!strs.length) return '';
  const minLength = strs.reduce((prev,cur)=>prev.length < cur.length ? prev : cur);
  
  let result = '';


  for (let i = 0; i < minLength.length; i++) {
    if (strs.every((stringItem)=> stringItem[i] === minLength[i])) {
      result += minLength[i];
    } else {
      break;
    }
  }
  return result;
};


// third method:

let longestCommonPrefix3 = function(strs) {
  if (!strs.length) return "";
  let prefix = strs[0];
  for (let i = 1; i < strs.length; i++) {
    while (strs[i].indexOf(prefix) !== 0) {
      prefix = prefix.substring(0, prefix.length - 1);
    }
  }
  return prefix;
};
const strs = ['flower', 'flow', 'flight'];
console.log(longestCommonPrefix3(strs));
