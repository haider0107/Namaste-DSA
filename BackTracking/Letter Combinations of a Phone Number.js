/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function (digits) {
  if (!digits.length) return [];

  let letters = {
    2: "abc",
    3: "def",
    4: "ghi",
    5: "jkl",
    6: "mno",
    7: "pqrs",
    8: "tuv",
    9: "wxyz",
  };

  let res = [];

  function bt(path, start) {
    if (path.length === digits.length) {
      res.push([...path].join(""));
      return;
    }

    let ele = Number(digits[start]);
    for (let i = 0; i < letters[ele].length; i++) {
      path.push(letters[ele][i]);
      bt(path, start + 1);
      path.pop();
    }
  }

  bt([], 0);

  return res;
};
