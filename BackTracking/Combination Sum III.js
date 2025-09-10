/**
 * @param {number} k
 * @param {number} n
 * @return {number[][]}
 */
var combinationSum3 = function (k, n) {
  let res = [];

  function bt(path, diff, start) {
    if (path.length === k && diff === 0) {
      res.push([...path]);
      return;
    }
    if (path.length >= k || diff < 0) return;

    for (let i = start; i <= 9; i++) {
      path.push(i);
      bt(path, diff - i, i + 1);
      path.pop();
    }
  }
  bt([], n, 1);

  return res;
};
