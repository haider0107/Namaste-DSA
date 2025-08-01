/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
  let l = 0;
  let r = 0;
  let maxLen = 0;

  let alpha = new Set();

  while (r < s.length) {
    if (!alpha.has(s[r])) {
      maxLen = Math.max(maxLen, r - l + 1);
      alpha.add(s[r]);
      r++;
    } else {
      alpha.delete(s[l]);
      l++;
    }
  }

  return maxLen;
};
