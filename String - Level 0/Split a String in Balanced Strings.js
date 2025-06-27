/**
 * @param {string} s
 * @return {number}
 */
var balancedStringSplit = function (s) {
  let res = 0;

  /*
  
  let lCount = 0, rCount = 0

  for (let i = 0; i < s.length; i++) {
    if (s[i] === "L") lCount++;
    if (s[i] === "R") rCount++;

    if (lCount === rCount) {
      res++;
    }
  }
  
  */
  let temp = 0;

  for (let i = 0; i < s.length; i++) {
    if (s[i] === "L") temp++;
    if (s[i] === "R") temp--;

    if (temp === 0) {
      res++;
    }
  }

  return res;
};
