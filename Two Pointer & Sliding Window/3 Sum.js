/**
 * @param {number[]} nums
 * @return {number[][]}
 */

var twoSum = function (x, l, r, nums, res) {
  while (l < r) {
    let sum = nums[l] + nums[r] + nums[x];

    if (sum === 0) {
      res.push([nums[l], nums[r], nums[x]]);
      l++;
      r--;
      while (nums[l] === nums[l - 1]) {
        l++;
      }
    } else if (sum > 0) r -= 1;
    else l += 1;
  }
};

var threeSum = function (nums) {
  let sortArr = nums.sort((a, b) => a - b);

  let res = [];
  for (let i = 0; i < sortArr.length - 2; i++) {
    if (sortArr[i] !== sortArr[i - 1]) {
      twoSum(i, i + 1, sortArr.length - 1, sortArr, res);
    }
  }

  return res;
};
