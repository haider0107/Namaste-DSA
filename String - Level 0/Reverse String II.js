/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var reverseStr = function (s, k) {
  let sLen = s.length;
  let sArr = s.split("");
  for (let i = 0; i < sLen; i = i + 2 * k) {
    let l = i;
    let r = Math.min(i + k, sLen) - 1;

    while (r > l) {
      let temp = sArr[l];
      sArr[l] = sArr[r];
      sArr[r] = temp;
      r--;
      l++;
    }
  }

  return sArr.join("");
};
