/**
 Question:(leetcode)
217. Contains Duplicate
Given an integer array nums, return true if any value appears at least twice in the array, and return false if every element is distinct.
**/
//! first method:
let containsDuplicate = function (nums) {
  const obj = {};
  for (const num of nums) {
    if (obj[num]) {
      return true;
    } else {
      obj[num] = 1;
    }
  }
  return false;
};

//! second method
let containsDuplicate2 = function (nums) {
  const nums2 = [...new Set(nums)];
  return nums2.length === nums.length;
};
