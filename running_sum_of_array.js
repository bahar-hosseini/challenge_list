/**
 Question:
  Given an array nums. We define a running sum of an array as runningSum[i] = sum(nums[0]…nums[i]).
  Return the running sum of nums.
 */

let runningSum = function (nums) {
  let ans = [];
  let tempValue = 0;
  for (let i = 0; i < nums.length; i++) {
    ans.push(nums[i] + tempValue);
    tempValue += nums[i];
  }
  return ans;
};
