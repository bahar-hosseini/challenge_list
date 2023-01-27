//412. Fizz Buzz

/**
 * @param {number} n
 * @return {string[]}
 */

//input: integer
//output : array ->each item of array should be a string

let fizzBuzz = function (n) {
  let result = [];
  for (let i = 0; i <= n; i++) {
    if (n % 15 === 0) {
      result.push('FizzBuzz');
    } else if (n % 3 === 0) {
      result.push('Fizz');
    } else if (n % 5 === 0) {
      result.push('Buzz');
    }
    result.push(String(i));
  }
  return result;
};
