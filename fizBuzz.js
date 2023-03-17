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


// Second method
let fizzBuzz2 = function(n) {
  let result = [];
  let str = "";
  for (let i = 1; i <= n; i++) {
    if (i % 3 === 0) {
      str += "Fizz";
    }
    if (i % 5 === 0) {
      
      str += "Buzz";
    }
    if (i % 3 !== 0 && i % 5 !== 0) {
      str += i;
    }
    result.push(str);
    str = '';
  }
  return result;
};

console.log(fizzBuzz2(15));