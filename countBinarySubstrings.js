//696. Count Binary Substrings

let countBinarySubstrings = function(s) {
  let prevCount = 0;
  let currCount = 1;
  let count = 0;

  for (let i = 1; i < s.length; i++) {
    if (s[i] === s[i - 1]) {
      currCount++;
    } else {
      prevCount = currCount;
      currCount = 1;
    }

    if (prevCount >= currCount) {
      count++;
    }
  }

  return count;
};
console.log(countBinarySubstrings("00110011"));
console.log(countBinarySubstrings("1010"));