/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function (nums, target) {
  let first = -1;
  let last = -1;

  if (!nums.length) return [first, last];

  let l = 0;
  let r = nums.length - 1;

  while (l < r) {
    let m = l + Math.floor((r - l) / 2);

    if (nums[m] === target) {
      r = m;
    } else if (nums[m] > target) {
      r = m - 1;
    } else {
      l = m + 1;
    }
  }

  if (nums[r] === target) first = r;

  l = 0;
  r = nums.length - 1;

  while (l < r) {
    let m = l + Math.ceil((r - l) / 2);

    if (nums[m] > target) {
      r = m - 1;
    } else {
      l = m;
    }
  }

  if (nums[l] === target) last = r;

  return [first, last];
};
