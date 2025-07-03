/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function (s, t) {
  if (s.length !== t.length) return false;

  let alphaMap = {};

  for (let i = 0; i < s.length; i++) {
    alphaMap[s[i]] = alphaMap[s[i]] ? alphaMap[s[i]] + 1 : 1;
  }

  for (let i = 0; i < t.length; i++) {
    if (!alphaMap[t[i]] || alphaMap[t[i]] <= 0) return false;
    else alphaMap[t[i]]--;
  }

  return true;
};
