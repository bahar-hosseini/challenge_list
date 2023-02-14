//326. Power of Three

/**
 * @param {number} n
 * @return {boolean}
 */
let isPowerOfThree = function(n) {
  if (n <= 0) return false;
  while (n % 3 === 0) {
    n /= 3;
  }
  return n === 1;
};

console.log(isPowerOfThree(27));
//input : number
//output:boolean
// if n <= 0 =>false
