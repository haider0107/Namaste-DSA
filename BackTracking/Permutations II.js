/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permuteUnique = function (arr) {
  let res = [];
  arr.sort((a, b) => a - b);

  function bt(path, choices) {
    if (path.length === arr.length) {
      res.push([...path]);
      return;
    }

    for (let i = 0; i < choices.length; i++) {
      if (i > 0 && choices[i] === choices[i - 1]) continue;
      path.push(choices[i]);
      bt(path, [...choices.slice(0, i), ...choices.slice(i + 1)]);
      path.pop();
    }
  }

  bt([], arr);

  return res;
};
