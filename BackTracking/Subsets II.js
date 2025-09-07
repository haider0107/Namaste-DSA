/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsetsWithDup = function (nums) {
  let res = [];

  let sortedArr = nums.sort((a, b) => a - b);

  function bt(path, start) {
    res.push([...path]);

    for (let i = start; i < sortedArr.length; i++) {
      if (i > start && sortedArr[i - 1] === sortedArr[i]) continue;

      path.push(sortedArr[i]);
      bt(path, i + 1);
      path.pop();
    }
  }

  bt([], 0);

  return res;
};
