/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function (n) {
  let dp = {};

  function total(n) {
    if (n <= 2) return n;

    if (!dp[n]) dp[n] = total(n - 1) + total(n - 2);

    return dp[n];
  }

  return total(n);
};
