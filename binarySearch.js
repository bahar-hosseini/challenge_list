// 704. Binary Search
const binarySearh = (nums, target) =>{
  let left = 0;
  let right = nums.length - 1;
  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    if (nums[mid] === target) {
      return mid;
    } else if (nums[mid] < target) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
    
  }
  return -1;
};
console.log(binarySearh([-1,0,3,5,9,12],9));