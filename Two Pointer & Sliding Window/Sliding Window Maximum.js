/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var maxSlidingWindow = function (nums, k) {
  let res = [];
  let q = [];

  let i = (j = 0);

  while (j < nums.length) {
    while (q.length && nums[j] > q.at(-1)) q.pop();

    q.push(nums[j]);

    if (j >= k - 1) {
      res.push(q[0]);

      if (nums[i] === q[0]) q.shift();
      i++;
    }
    j++;
  }

  return res;
};
