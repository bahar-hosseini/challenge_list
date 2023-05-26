// 5. Longest Palindromic Substring

// /**
//  * @param {string} s
//  * @return {string}
//  */

const getDome = (left,right,s)=>{
  while (left >= 0 && right <= s.length) {
    if (s[left] !== s[right]) break;
    left--;
    right++;
  }
  return [left + 1 ,right];
};
let longestPalindrome = function(s) {
  let max = [0,1];

  for (let i = 0; i < s.length; i++) {
    let even = getDome(i - 1 , i , s);
    let odd = getDome(i - 1 , i + 1 , s);
    console.log(odd);
    let curMax = odd[1] - odd[0] > even[1] - even[0] ? odd : even;

    max = curMax[1] - curMax[0] > max[1] - max[0] ? curMax : max;
  }
  return s.slice(max[0],max[1]);
};
//input : string
//output : string ->longest subString
console.log(longestPalindrome("babad"));