/**
 * @param {string} s
 * @return {number}
 */
var countSubstrings = function (s) {
  let n = s.length;
  let ans = 0;

  let dp = Array.from({ length: n }, () => new Array(n).fill(null));

  for (let i = 0; i < n; i++) {
    dp[i][i] = true;
    ans++;
    if (i < n - 1 && s[i] === s[i + 1]) {
      dp[i][i + 1] = true;
      ans++;
    }
  }

  for (let len = 3; len <= n; len++) {
    for (let i = 0; i < n; i++) {
      let j = i + len - 1;
      if (s[i] === s[j] && dp[i + 1][j - 1]) {
        dp[i][j] = true;
        ans++;
      }
    }
  }

  // console.log(dp)

  return ans;
};
