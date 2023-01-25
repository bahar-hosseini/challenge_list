//66. Plus One

/**
 * @param {number[]} digits
 * @return {number[]}
 */
let plusOne = function (digits) {
  for (let i = digits.length - 1; i >= 0; i--) {
    if (digits[i] < 9) {
      console.log(digits[i]);
      digits[i] += 1;
      return digits;
    }
    digits[i] = 0;
  }
  digits.unshift(1);
  return digits;
};
console.log(plusOne([9, 9]));
console.log(plusOne([7]));
