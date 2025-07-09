/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var nextGreaterElement = function (nums1, nums2) {
  let map = {};

  let stack = [nums2.at(-1)];
  // set nums2 last value nge to -1
  map[nums2.at(-1)] = -1;

  for (let i = nums2.length - 2; i >= 0; i--) {
    let ele = nums2[i];
    let nge = -1;

    while (stack.length) {
      if (stack.at(-1) > ele) {
        nge = stack.at(-1);
        stack.push(ele);
        break;
      }
      stack.pop();
    }

    // because stack is empty
    if (nge === -1) stack.push(ele);

    map[ele] = nge;
  }

  let ans = new Array(nums1.length);

  for (let i = 0; i < nums1.length; i++) {
    ans[i] = map[nums1[i]];
  }

  return ans;
};
