let twoSum = function (nums, target) {
  const obj = {}

  for (let i = 0; i < nums.length; i++) {
    let numOne = target - nums[i]
    if (obj[numOne] !== undefined) {
      return [obj[numOne], i]
    }
    obj[nums[i]] = i
  }
}

console.log(twoSum([2, 7, 11, 15], 9))
