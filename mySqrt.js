// 69. Sqrt(x)

/**
 * @param {number} x
 * @return {number}
 */
let mySqrt = function (x) {
  if (x < 2) {
    return x;
  }
  for (let i = 2; i <= x; i++) {
    if (i * i === x) {
      return i;
    }
    if (i * i > x) {
      return i - 1;
    }
  }
};

//input : non-negative integer
//output ->integer

//edge cases: 0 <= x <= 231 - 1
