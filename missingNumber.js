//268. Missing Number

let missingNumber = function (nums) {
  //first method:
  const gSum = (nums.length * (nums.length + 1)) / 2;
  const nSum = nums.reduce((acc, curr) => acc + curr);
  return gSum - nSum;
};

console.log(missingNumber([3, 0, 1]));

//input : array
//output: number
//All the numbers of nums are unique.
