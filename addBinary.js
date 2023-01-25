// 67. Add Binary

/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
let addBinary = function (a, b) {
  //! ***** first method: ****** :
  * the highest supported number in js is 53 bit */

  if (a.length < 53 && b.length < 53) {

    return ((parseInt(a,2) + parseInt(b,2)).toString(2));
  }
  return ((BigInt("0b" + a) + BigInt("0b" + b)).toString(2));

  //! ***** Second method: *****

  let sum = '';

  // We want to start from right
  let i = a.length - 1;
  let j = b.length - 1;

  let carry = 0;
};

//?codewars -> Kata : if a & b are Decimal numbers :
let addBinaryDec = function (a, b) {
  return Number(a + b).toString(2);
};
