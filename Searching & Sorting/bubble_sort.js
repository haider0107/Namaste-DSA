function bubbleSort(nums) {
  let n = nums.length;

  for (let i = 0; i < n - 1; i++) {
    let swapped = false;

    for (let j = 0; j < n - 1 - i; j++) {
      if (nums[j] > nums[j + 1]) {
        let temp = nums[j];
        nums[j] = nums[j + 1];
        nums[j + 1] = temp;

        swapped = true;
      }
    }

    if (!swapped) break;
  }

  console.log(nums);
}

bubbleSort([5, 4, 8, 6, 7, 2]);

bubbleSort([10, 9, 8, 7, 6, 5, 4, 3, 2, 1]);
