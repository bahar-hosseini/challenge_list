//! fibonacci ---> using recursion

const fibonacciRecursion = (n) => {
  while (n < 2) {
    return n;
  }
  return fibonacciRecursion(n - 1) + fibonacciRecursion(n - 2);
};

//! fibonacci ---> using closure

const fibonacciClosure = (n) => {
  let cache = {};
  return function fib(n) {
    if (n in cache) {
      return cache[n];
    } else {
      if (n < 2) {
        return n;
      } else {
        cache[n] = fib(n - 1) + fib(n - 2);
        return cache[n];
      }
    }
  };
};

//! fibonacci ---> Return Array
//Write a function that takes in N and outputs an array with the result of the fibs from 0 to N
// input : N int
// outPut : Array []: of Fib 0 to N
// 0 , 1 , 1, 2, 3 , 5 ,8

const fib = (n)=>{
  let result = [0,1];
  for (let i = 2; i < n; i++) {
    result.push(result[i - 1] + result[i - 2]);
  }
  return result.slice(0, n + 1);
};
console.log(fib(2));
