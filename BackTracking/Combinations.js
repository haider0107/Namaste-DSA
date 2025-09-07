/**
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 */
var combine = function (n, k) {
  let res = [];

  function bt(path, start) {
    if (path.length === k) {
      res.push([...path]);
      return;
    }
    for (let i = start; i <= n; i++) {
      path.push(i);
      bt(path, i + 1);
      path.pop();
    }
  }
  bt([], 1);

  return res;
};
