//125. Valid Palindrome

let isPalindrome = function(s) {
  s = s.toLowerCase().replace(/[\W_]/g, '');
  let reversed = s.split('').reverse().join('');
  return s === reversed;
};

//Method 2
let isPalindrome2 = function(s) {

  s = s.replace(/[^0-9a-z]/ig,"").toLowerCase();
  let midLength = Math.floor(s.length / 2);
  for (let i = 0; i < midLength; i++) {
    if (s[i] !== s[s.length - 1 - i]) {
      return false;
    }
  }
  return true;
};

console.log(isPalindrome('amanaplanacanalpanama'));
console.log(isPalindrome('raceacar'));
console.log(isPalindrome(' '));
console.log(isPalindrome(`_j_k_$#w jk_ `));
