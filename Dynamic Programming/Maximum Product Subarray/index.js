/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProduct = function (nums) {
  let maxProd = (minProd = nums[0]);

  let max = nums[0];

  for (let i = 1; i < nums.length; i++) {
    let temp = maxProd;

    maxProd = Math.max(nums[i], maxProd * nums[i], minProd * nums[i]);
    minProd = Math.min(nums[i], temp * nums[i], minProd * nums[i]);

    max = Math.max(max, maxProd);
  }


  

  return max;
};
