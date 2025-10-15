/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function (nums) {
  let currSum = nums[0];

  let maxSum = currSum;

  for (let i = 1; i < nums.length; i++) {
    if (currSum < 0) {
      currSum = 0;
    }

    currSum += nums[i];

    maxSum = Math.max(maxSum, currSum);
  }

  return maxSum;
};
