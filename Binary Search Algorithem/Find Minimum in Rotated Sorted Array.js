/**
 * @param {number[]} nums
 * @return {number}
 */
var findMin = function (nums) {
  /*
    
    let l = 0
    let r = nums.length -1

    while(l<r){
        let m = l + Math.floor((r-l)/2)

        if(nums[m] > nums[l] && nums[l] < nums[r]){
            r = m-1
        }else{
            if(nums[m] < nums[r]) r = m
            else l = m+1
        }
    }

    return nums[l]
    
    */

  let l = 0;
  let r = nums.length - 1;

  // if (nums[l] <= nums[r]) {
  //   return nums[l];
  // }

  while (l <= r) {
    let m = l + Math.floor((r - l) / 2);

    if (nums[l] <= nums[r]) {
      return nums[l];
    } else if (nums[m] < nums[m - 1]) {
      return nums[m];
    } else if (nums[l] > nums[m]) {
      r = m - 1;
    } else {
      l = m + 1;
    }
  }
};
