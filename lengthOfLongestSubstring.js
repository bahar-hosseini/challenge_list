// 3. Longest Substring Without Repeating Characters

/**
 * @param {string} s
 * @return {number}
 */
let lengthOfLongestSubstring1 = function(s) {
  if (s.length < 0) return s.length;
  let curr = '';
  let index;
  let maxLength = 0;
  for (let char of s) {
    index = curr.indexOf(char);
    if (index !== -1) { // this char is in curr
      if (curr.length > maxLength) {
        maxLength = curr.length;
 
      }
    }
    curr = curr.slice(index + 1) + char;
  }
  return maxLength > curr.length ? maxLength : curr.length;
};

console.log(lengthOfLongestSubstring1("abcabcbb"));
// console.log(lengthOfLongestSubstring("bbbbb"));
// console.log(lengthOfLongestSubstring("pwwkew"));
// console.log(lengthOfLongestSubstring(" "));
// console.log(lengthOfLongestSubstring("au"));
console.log(lengthOfLongestSubstring1("dvdf"));

//input : String
//output: Number ->longest substring
//loop through string
//
 
 
