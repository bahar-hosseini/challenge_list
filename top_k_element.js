/**
 Question:
347. Top K Frequent Elements
Given an integer array nums and an integer k, return the k most frequent elements. You may return the answer in any order.
 */

let topKFrequent = function (nums, k) {
  //todo create an object to store the number of frequency of each item (key number : value frequency)
  //?O(n)
  const obj = {};

  for (let i of nums) {
    if (obj[i]) {
      obj[i] += 1;
    } else {
      obj[i] = 1;
    }
  }

  //todo create an array that contains empty array for each number of nums array the first empty array is for numbers with 0 frequency, the second empty array contains numbers with 1 frequency , we want to have ([ [], [ '3' ], [ '2' ], [ '1' ], [], [] ])
  const bucket = [];
  for (let i = 0; i <= nums.length; i++) {
    bucket.push([]);
  }

  //todo each index of buckets shows frequency of the number which is the value of our obj
  for (let key in obj) {
    bucket[obj[key]].push(key);
  }

  //todo the last arrays have more frequency, so, we start from the last element.
  let res = [];
  for (let i = bucket.length - 1; i >= 0; i--) {
    if (bucket[i].length === 0) {
      continue;
    } else {
      res = [...res, ...bucket[i]];
    }
  }

  return res.slice(0, k);
};

topKFrequent([1, 1, 1, 2, 2, 3], 2);
