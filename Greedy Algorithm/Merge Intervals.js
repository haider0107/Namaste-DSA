/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function (arr) {
  /* My Solution 
    let ans = []

    arr.sort((a, b) => a[0] - b[0])

    let i = 0
    let j = 1
    let n = arr.length

    while (i < n) {
        let temp = arr[i]
        while (j < n && temp[1] >= arr[j][0]) {
            temp[0] = Math.min(temp[0], arr[j][0])
            temp[1] = Math.max(temp[1], arr[j][1])
            j++
        }
        ans.push(temp)
        i = j
        j++
    }
    //[ [ 0, 2 ], [ 1, 4 ], [ 3, 5 ] ]

    return ans
    */

  // Course solution

  arr.sort((a, b) => a[0] - b[0]);

  let ans = [arr[0]];

  for (let i = 0; i < arr.length; i++) {
    if (arr[i][0] <= ans.at(-1)[1]) {
      ans.at(-1)[1] = Math.max(ans.at(-1)[1], arr[i][1]);
    } else {
      ans.push(arr[i]);
    }
  }

  return ans;
};
