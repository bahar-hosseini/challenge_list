// 350. Intersection of Two Arrays II

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
let intersect = function(nums1, nums2) {
  let obj = {};
  let result = [];
  for (let num of nums1) {
    obj[num] = obj[num] + 1 || 1;
  }

  for (let num of nums2) {
    
    if (obj[num] > 0) {
      result.push(num);
      obj[num] --;
    }
  }
  return result;
};

console.log(intersect([1,2,2,1],[2,2]));

//inputs: two arrays
//output: array

