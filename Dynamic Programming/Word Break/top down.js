/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {boolean}
 */
var wordBreak = function (s, wordDict) {
  let dp = {};
  let fn = (remS) => {
    if (remS === "") return true;
    if (remS in dp) return dp[remS];
    let res = false;
    for (let i = 0; i < remS.length; i++) {
      let substr = remS.substring(0, i + 1);
      if (wordDict.includes(substr) && fn(remS.substring(i + 1))) {
        res = true;
      }
    }
    return (dp[remS] = res);
  };
  return fn(s);
};
