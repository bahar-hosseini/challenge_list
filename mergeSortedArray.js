//88. Merge Sorted Array

/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
let merge = function (nums1, m, nums2, n) {
  let f = m - 1;
  let s = n - 1;
  let i = m + n - 1;

  while (s >= 0) {
    let fVal = nums1[f];
    let sVal = nums2[s];
    if (fVal > sVal) {
      nums1[i] = fVal;
      i--;
      f--;
    } else {
      nums1[i] = sVal;
      i--;
      s--;
    }
  }

  return nums1;
};
