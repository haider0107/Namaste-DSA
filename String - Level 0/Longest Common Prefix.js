/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (s) {
  // let pre = s[0]

  // let i = 0
  // while (i < s.length - 1) {
  //     let temppre = ""
  //     let first = s[i]
  //     let second = s[i + 1]

  //     // let length = Math.min(first.length, second.length)
  //     let j = 0
  //     while (j < pre.length) {
  //         if (pre[j] === second[j]  && first[j] === second[j]) temppre += first[j]
  //         else break;
  //         j++
  //     }
  //     if (temppre === "") return ""
  //     pre = temppre
  //     i++
  // }
  // return pre

  let x = 0;

  while (x < s[0].length) {
    for (let i = 1; i < s.length; i++) {
      let letter = s[0][x]; // first letter of x position word

      if (s[i][x] !== letter || x == s[i].length) {
        return s[0].substring(0, x);
      }
    }
    x++;
  }

  return s[0];
};
