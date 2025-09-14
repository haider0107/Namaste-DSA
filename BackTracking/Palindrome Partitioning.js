/**
 * @param {string} s
 * @return {string[][]}
 */
var partition = function (s) {
  let res = [];

  function backtrack(path, remainingString) {
    if (!remainingString.length) {
      res.push([...path]);
      return;
    }

    for (let i = 1; i <= remainingString.length; i++) {
      let choice = remainingString.substring(0, i);

      if (!isPalindrome(choice)) continue;
      path.push(choice);
      backtrack(path, remainingString.substring(i));
      path.pop();
    }
  }

  backtrack([], s);

  return res;
};

function isPalindrome(s) {
  let i = 0;
  let j = s.length - 1;
  while (i < j) {
    if (s[i++] != s[j--]) return false;
  }

  return true;
}
