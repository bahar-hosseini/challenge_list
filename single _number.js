/**
 Question:
136. Single Number
Given a non-empty array of integers nums, every element appears twice except for one. Find that single one.
You must implement a solution with a linear runtime complexity and use only constant extra space.
 */

//! Method one using hashmap
let singleNumber = function (nums) {
  const obj = {};
  for (let i of nums) {
    if (obj[i] === undefined) {
      obj[i] = 1;
    } else {
      obj[i]++;
    }
  }

  for (let i in obj) {
    if (obj[i] === 1) {
      return i;
    }
  }
};

//! Method two using XOR bitwise (Run time 73 ms)
let singleNumberTwo = function (nums) {
  let value = 0;
  for (let i = 0; i < nums.length; i++) {
    value ^= nums[i];
  }
  return value;
};
