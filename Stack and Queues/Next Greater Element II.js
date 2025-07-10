/**
 * @param {number[]} nums
 * @return {number[]}
 */
var nextGreaterElements = function (nums) {
  /* 
    // with double array

    let arr = []

    for (let i = 0; i < 2; i++) {
        nums.forEach(ele => arr.push(ele))
    }

    let stack = [arr.at(-1)]

    let ans = new Array(arr.length).fill(-1)

    for (let i = arr.length - 2; i >= 0; i--) {
        while(stack.length){
            if(stack.at(-1) > arr[i]){
                ans[i] = stack.at(-1)
                break;
            }
            stack.pop()
        }
        stack.push(arr[i])
    }

    return ans.slice(0,nums.length)
    */

  let stack = [nums.at(-1)];

  let ans = new Array(nums.length).fill(-1);

  for (let i = nums.length * 2 - 2; i >= 0; i--) {
    while (stack.length) {
      if (stack.at(-1) > nums[i % nums.length]) {
        ans[i % nums.length] = stack.at(-1);
        break;
      }
      stack.pop();
    }
    stack.push(nums[i % nums.length]);
  }

  return ans.slice(0, nums.length);
};
