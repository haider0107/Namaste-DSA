/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum2 = function (nums, target) {
  let res = [];

  let candidates = nums.sort((a, b) => a - b);

  function bt(path, start, diff) {
    if (diff === 0) {
      res.push([...path]);
      return;
    }
    if (diff < 0) return;

    for (let i = start; i < candidates.length; i++) {
      if (i > start && candidates[i - 1] === candidates[i]) continue;
      path.push(candidates[i]);
      bt(path, i + 1, diff - candidates[i]);
      path.pop();
    }
  }
  bt([], 0, target);

  return res;
};
