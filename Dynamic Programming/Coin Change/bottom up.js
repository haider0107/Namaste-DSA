/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
var coinChange = function (coins, amount) {
  let n = coins.length;
  let dp = new Array(amount + 1).fill(Infinity);

  dp[0] = 0;

  for (let i = 1; i <= amount; i++) {
    for (let j = 0; j < n; j++) {
      let remAmt = i - coins[j];
      if (remAmt >= 0) {
        dp[i] = Math.min(dp[i], 1 + dp[remAmt]);
      }
    }


    
  }

  return dp[amount] === Infinity ? -1 : dp[amount];
};
