//66. Plus One

/**
 * @param {number[]} digits
 * @return {number[]}
 */
let plusOne = function (digits) {
  if (digits[digits.length - 1] < 9) {
    digits[digits.length - 1] += 1;
  }
  if (digits[digits.length - 1] === 9) {
    digits[digits.length - 1] = 1;
    digits.push(0);
  }
  return digits;
};
