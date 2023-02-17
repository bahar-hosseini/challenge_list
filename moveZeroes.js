//283. Move Zeroes
/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
let moveZeroes = function(nums) {
  let index = 0;
  for (let i = 0; i < nums.length; i++) {
    const num = nums[i];
    if (num !== 0) {
      nums[index] = num;
      index ++;
    }
  }

  for (let i = index; i < nums.length; i++) {
    nums [i] = 0;
  }
};

console.log(moveZeroes[0,1,0,3,12]);
// input : array
// output : array
// move 0's to the end of the array
// moving should be in place ->not make a copy of array

