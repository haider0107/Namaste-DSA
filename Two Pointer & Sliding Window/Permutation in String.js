/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
var checkInclusion = function (s1, s2) {
  let s1Arr = new Array(26).fill(0);
  let s2Arr = new Array(26).fill(0);

  for (let i = 0; i < s1.length; i++) {
    s1Arr[s1.charCodeAt(i) - 97]++;
    s2Arr[s2.charCodeAt(i) - 97]++;
  }

  let i = 0;
  let j = s1.length - 1;

  while (j < s2.length) {
    if (isValid(s1Arr, s2Arr)) {
      return true;
    } else {
      s2Arr[s2.charCodeAt(i) - 97]--;
      i++;
      j++;
      s2Arr[s2.charCodeAt(j) - 97]++;
    }
  }

  return false;
};

var isValid = function (arr1, arr2) {
  for (let i = 0; i < 26; i++) {
    if (arr1[i] !== arr2[i]) return false;
  }

  return true;
};
