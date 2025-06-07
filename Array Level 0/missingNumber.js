/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function (nums) {
  let n = nums.length;
  let totalSum = (n * (n + 1)) / 2;

  let arraySum = 0;
  for (let i = 0; i < n; i++) {
    arraySum += nums[i];
  }

  let missing = totalSum - arraySum;

  return missing;
};
