/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canPartition = function (nums) {
  let arrSum = 0;

  for (let i = 0; i < nums.length; i++) {
    arrSum += nums[i];
  }

  if (arrSum % 2 !== 0) return false;

  const sum = arrSum / 2;

  let dp = {};

  function bt(btSum, start) {
    if (btSum === 0) {
      return true;
    }

    if (btSum < 0) return false;

    let key = btSum + "-" + start;

    if (key in dp) return dp[key];

    for (let i = start; i < nums.length; i++) {
      if (bt(btSum - nums[i], i + 1)) {
        return (dp[key] = true);
      }
    }

    return (dp[key] = false);
  }

  return bt(sum, 0);
};
