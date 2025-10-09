/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
var coinChange = function (coins, amount) {
  let dp = {};

  const fn = (remAmt) => {
    if (remAmt === 0) return 0;
    if (remAmt < 0) return -1;

    if (remAmt in dp) return dp[remAmt];

    let count = Infinity;
    for (let i = 0; i < coins.length; i++) {
      let res = fn(remAmt - coins[i]);

      if (res != -1) {
        count = Math.min(count, 1 + res);
      }
    }

    dp[remAmt] = count === Infinity ? -1 : count;
    // console.log(dp[remAmt], remAmt)

    return dp[remAmt];
  };

  return fn(amount);
};
