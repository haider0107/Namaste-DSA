/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function (nums) {
  let res = [];

  function bt(path) {
    if (path.length === nums.length) {
      res.push([...path]);
    }
    for (let i = 0; i < nums.length; i++) {
      if (!path.includes(nums[i])) {
        path.push(nums[i]);
        bt(path);
        path.pop();
      }
    }
  }

  bt([]);

  return res;
};
