/**
 * @param {number[]} cost
 * @return {number}
 */
var minCostClimbingStairs = function (cost) {
  let dp = { 0: cost[0], 1: cost[1] };

  function climbCost(n) {
    if (n <= 1) return 0;

    if (dp[n] === undefined) {
      let one = cost[n - 1] + climbCost(n - 1);
      let two = cost[n - 2] + climbCost(n - 2);

      dp[n] = Math.min(one, two);
    }

    return dp[n];
  }

  return climbCost(cost.length);
};
