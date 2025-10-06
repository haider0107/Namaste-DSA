/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function (nums) {
  if (nums.length === 1) return nums[0];

  // Space Com : O(n)
  /* 
    let dp = [nums[0],Math.max(nums[0],nums[1])]

    for(let i = 2;i<nums.length;i++){
        dp[i] = Math.max(dp[i-1] , nums[i] + dp[i-2])
    }

    return dp.at(-1)
    */

  // Space Com: O(1)

  let first = nums[0];
  let second = Math.max(nums[0], nums[1]);

  for (let i = 2; i < nums.length; i++) {
    let temp = second;
    second = Math.max(second, nums[i] + first);
    first = temp;
  }

  return second;
};
