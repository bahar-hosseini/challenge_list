//leetcode 13. Roman to Integer

let romanToInt = function (s) {
  const obj = { I: 1, V: 5, X: 10, L: 50, C: 100, D: 500, M: 1000 };
  let sum = 0;
  for (let i = 0; i < s.length; i++) {
    if (obj[s[i]] < obj[s[i + 1]]) {
      sum -= obj[s[i]];
    } else if (obj[s[i]] >= obj[s[i + 1]] || i === s.length - 1) {
      sum += obj[s[i]];
    }
  }
  return sum;
};

console.log(romanToInt('MCMXCIV'));
