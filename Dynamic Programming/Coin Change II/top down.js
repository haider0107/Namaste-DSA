/**
 * @param {number} amount
 * @param {number[]} coins
 * @return {number}
 */
var change = function (amount, coins) {
  let dp = Array.from({ length: amount + 1 }, () =>
    new Array(coins.length).fill(-1)
  );

  function fn(start, remS) {
    if (remS === 0) return 1;

    if (remS < 0) return 0;

    if (dp[remS][start] !== -1) {
      console.log(`dp[${remS}][${start}] = ${dp[remS][start]}`)
      return dp[remS][start];
    }

    let count = 0;
    for (let i = start; i < coins.length; i++) {
      count += fn(i, remS - coins[i]);
    }

    console.log(`dp[${remS}][${start}] = ${count}`)

    return (dp[remS][start] = count);
  }

  return fn(0, amount);
};
