//202. Happy Number

/**
 * @param {number} n
 * @return {boolean}
 */

//helper function
const getNumSum = (num)=>{
  let total = 0;
  while (num !== 0) {
    let lastDigit = num % 10;
    num = Math.floor(num / 10);
    total += Math.pow(lastDigit,2);
  }
  return total;
};
let isHappy = function(n) {
  let fast = n;
  let slow = n;
  while (true) {
    fast = getNumSum(getNumSum(fast));
    slow = getNumSum(slow);
    if (fast === slow) {
      if (fast === 1) {
        return true;
      }
      return false;
    }
  }

};

//19


