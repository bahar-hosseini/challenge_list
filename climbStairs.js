// 70. Climbing Stairs

/**
 * @param {number} n
 * @return {number}
 */
const climbStairs = function (n) {
  let cache = {};
  return function steps(n) {
    if (n in cache) {
      return cache[n];
    } else {
      if (n < 4) {
        return n;
      } else {
        cache[n] = steps(n - 1) + steps(n - 2);
        return cache[n];
      }
    }
  };
};
const climbFunc = climbStairs();
console.log(climbFunc(7));
