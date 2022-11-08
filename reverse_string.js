/**
 Question:
344. Write a function that reverses a string. The input string is given as an array of characters s.
 */

let reverseString = function (s) {
  let i = 0;
  let j = s.length - 1;
  let temp;

  while (i <= j) {
    temp = s[i];
    s[i] = s[j];
    s[j] = temp;
    i++, j--;
  }
};
