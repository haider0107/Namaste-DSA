/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isIsomorphic = function (s, t) {
  if (s.length === 1) return true;

  let alphaMap = {};
  let alphaSet = new Set();

  for (let i = 0; i < s.length; i++) {
    if (!alphaMap[s[i]]) {
      if (alphaSet.has(t[i])) return false;
      alphaMap[s[i]] = t[i];
      alphaSet.add(t[i]);
    } else {
      if (alphaMap[s[i]] !== t[i]) return false;
    }
  }
  return true;
};
