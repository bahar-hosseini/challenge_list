//125. Valid Palindrome

let isPalindrome = function (s) {
  s = s.toLowerCase().replace(/[\W_]/g, '');
  let reversed = s.split('').reverse().join('');
  return s === reversed;
};

console.log(isPalindrome('amanaplanacanalpanama'));
console.log(isPalindrome('raceacar'));
console.log(isPalindrome(' '));
console.log(isPalindrome(`_j_k_$#w jk_ `));
