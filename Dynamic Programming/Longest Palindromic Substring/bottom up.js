/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function (s) {
  let n = s.length;
  let dp = Array.from({ length: n }, () => new Array(n).fill(null));

  let ans = [0, 0];

  //   base case - 1 length substring , 2 length substring
  for (let i = 0; i < n; i++) {
    dp[i][i] = true;
    if (i < n - 1 && s[i] === s[i + 1]) {
      dp[i][i + 1] = true;
      ans = [i, i + 1];
    }
  }

  // len 3...n

  for (let len = 3; len <= n; len++) {
    for (let i = 0; i < n; i++) {
      let j = i + len - 1;
      if (s[i] === s[j] && dp[i + 1][j - 1]) {
        dp[i][j] = true;
        ans = [i, j];
      }
    }
  }

  return s.substring(ans[0], ans[1] + 1);
};
