// 9. Palindrome Number
/**
 Given an integer x, return true if x is a palindrome and false otherwise.
 */

let isPalindrome = function (x) {
  if (x < 0) {
    return false;
  }
  const arrX = x.toString().split('');
  let reversed = arrX.reverse().join('');
  reversed = Number(reversed);
  return x === reversed;
};
