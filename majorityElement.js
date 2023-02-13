// 169. Majority Element

const majorityElement = (nums) => {
  let obj = {};
  let recurred = 0;
  let result;
  for (let num of nums) {
    obj[num] = obj[num] + 1 || 1;
  }
  for (let key in obj) {
    if (obj[key] > recurred) {
      recurred = obj[key];
      result = key;
    }
  }
  return result;
};

//input : an array
//output: number

console.log(majorityElement([3,2,3]));
