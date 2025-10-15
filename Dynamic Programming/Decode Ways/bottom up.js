/**
 * @param {string} s
 * @return {number}
 */
var numDecodings = function (s) {
  const n = s.length;
  const dp = new Array(n + 1).fill(0);

  dp[0] = 1;
  dp[1] = s[0] != 0 ? 1 : 0;

  for (let i = 2; i <= n; i++) {
    const one = Number(s.slice(i - 1, i));
    const two = Number(s.slice(i - 2, i));

    if (one > 0 && one <= 9) {
      dp[i] += dp[i - 1];
    }

    if (two >= 10 && two <= 26) {
      dp[i] += dp[i - 2];
    }
  }

  return dp[n];
};
