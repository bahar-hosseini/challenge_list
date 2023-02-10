//268. Missing Number

let missingNumber = function (nums) {
  //!first method:
  const gSum = (nums.length * (nums.length + 1)) / 2;
  const nSum = nums.reduce((acc, curr) => acc + curr);
  return gSum - nSum;

  //!second method:
  // let i = 0;
  // while (i < nums.length) {
  //   if ((nums.includes(i))) {
  //     i++;
  //   } else {
  //     return i;
  //   }

  // }

  //! third method:
  // nums = nums.sort();
  // for (let i = 0; i < nums.length; i++) {
  //   if (nums[i] !== i) {
  //     return i;
  //   }
  // }
};

console.log(missingNumber([3, 0, 1]));

//input : array
//output: number
//* first number of range is 0
//All the numbers of nums are unique.
