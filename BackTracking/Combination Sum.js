/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function (candidates, target) {
  let res = [];

  function bt(path, start, diff) {
    if (diff === 0) {
      res.push([...path]);
      return;
    }
    if (diff < 0) return;

    for (let i = start; i < candidates.length; i++) {
      path.push(candidates[i]);
      bt(path, i, diff - candidates[i]);
      path.pop();
    }
  }
  bt([], 0, target);

  return res;
};
