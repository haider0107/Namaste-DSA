/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function (s) {
  let l = 0;
  let r = s.length - 1;

  function isAlpha(s) {
    if (s.charCodeAt(0) >= 65 && s.charCodeAt(0) <= 90) return true;
    if (s.charCodeAt(0) >= 97 && s.charCodeAt(0) <= 122) return true;
    if (parseInt(s) >= 0 && parseInt(s) <= 9) return true;
    return false;
  }

  while (r > l) {
    if (!isAlpha(s[l])) {
      l++;
      continue;
    } else if (!isAlpha(s[r])) {
      r--;
      continue;
    } else if (s[l].toLowerCase() !== s[r].toLowerCase()) {
      return false;
    }
    l++;
    r--;
  }
  return true;
};
