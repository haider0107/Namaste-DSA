/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isSubsequence = function (s, t) {
  let sPoint = 0;

  for (let i = 0; i < t.length; i++) {
    if (t[i] === s[sPoint]) {
      sPoint++;
    } else if (t[i] === s[0]) {
      sPoint = 1;
    }

    if (sPoint === s.length) return true;
  }

  return sPoint === s.length;
};
