/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function (nums, k) {
  let map = {};

  for (let i = 0; i < nums.length; i++) {
    if (map[nums[i]]) map[nums[i]]++;
    else map[nums[i]] = 1;
  }

  let freq = new Array(nums.length + 1);

  for (const key in map) {
    if (freq[map[key]]) {
      freq[map[key]].push(Number(key));
    } else {
      freq[map[key]] = [Number(key)];
    }
  }

  let res = [];

  for (let i = freq.length - 1; i >= 0; i--) {
    if (freq[i]) {
      for (let j = 0; j < freq[i].length; j++) {
        res.push(freq[i][j]);
        if (res.length === k) return res;
      }
    }
  }
};
