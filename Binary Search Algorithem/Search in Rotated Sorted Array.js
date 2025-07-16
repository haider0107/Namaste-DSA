/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function (nums, target) {
  /* 

    // O(n)
    let l = 0
    let r = nums.length - 1

    while (l <= r) {
        if (nums[l] > target) l += 1
        else if (nums[r] < target) r -= 1
        else {
            let m = l + Math.floor((r - l) / 2)

            if (nums[m] === target) return m
            else if (nums[m] > target) r = m - 1
            else l = m + 1
        }
    }

    return -1
    */

  // O(logn)
  let l = 0;
  let r = nums.length - 1;

  while (l <= r) {
    let m = l + Math.floor((r - l) / 2);

    if (nums[m] === target) return m;
    if (nums[l] <= nums[m]) {
      if (target >= nums[l] && target < nums[m]) {
        r = m - 1;
      } else {
        l = m + 1;
      }
    } else {
      if (target > nums[m] && target <= nums[r]) {
        l = m + 1;
      } else {
        r = m - 1;
      }
    }
  }

  return -1;
};
