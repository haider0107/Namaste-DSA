/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function (nums) {
  let res = [];

  function backtrack(path, start) {
    res.push([...path]);
    for (let i = start; i < nums.length; i++) {
      path.push(nums[i]);
      backtrack(path, i + 1);
      path.pop();
    }
  }

  backtrack([], 0);

  return res;
};
