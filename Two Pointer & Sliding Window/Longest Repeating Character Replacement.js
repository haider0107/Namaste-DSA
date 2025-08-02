/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var characterReplacement = function (s, k) {
  let i = (j = 0);
  let arr = new Array(26).fill(0);
  arr[s.charCodeAt(0) - 65]++;
  let maxChar = 0;
  while (j < s.length) {
    if (isValid(arr, k)) {
      maxChar = Math.max(maxChar, j - i + 1);
      j++;
      arr[s.charCodeAt(j) - 65]++;
    } else {
      arr[s[i].charCodeAt() - 65]--;
      i++;
    }
  }

  return maxChar;
};

var isValid = function (arr, k) {
  let maxAlpha = 0;
  let total = 0;
  for (let i = 0; i < arr.length; i++) {
    if (maxAlpha < arr[i]) {
      maxAlpha = arr[i];
    }
    total += arr[i];
  }
  // console.log(total, maxAlpha)
  // console.log((total - maxAlpha) <= k)

  return total - maxAlpha <= k;
};
