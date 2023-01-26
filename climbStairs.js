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

// Method 2

const climbStairs2 = function (n) {
  if (n <= 3) {
    return n;
  }

  let a = 2;
  let b = 3;
  let temp = 0;
  for (let i = 3; i < n; i++) {
    temp = b;
    b = a + b;
    a = temp;
  }

  return b;
};

console.log(climbStairs2(5));
