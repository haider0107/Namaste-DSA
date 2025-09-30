/**
 * @param {number[][]} intervals
 * @return {number}
 */
// var eraseOverlapIntervals = function (arr) {
//   arr.sort((a, b) => a[1] - b[1]);

//   let ans = [arr[0]];

//   let count = 0;

//   for (let i = 1; i < arr.length; i++) {
//     if (ans.at(-1)[1] > arr[i][0]) {
//       count++;
//     } else {
//       ans.push(arr[i]);
//     }
//   }

//   return count;
// };

/**
 * @param {number[][]} intervals
 * @return {number}
 */
var eraseOverlapIntervals = function (arr) {
    arr.sort((a, b) => a[1] - b[1])

    let k = arr[0][1]
    let count = 0

    for (let i = 1; i < arr.length; i++) {
        if (k > arr[i][0]) {
            count++
        } else {
            k = arr[i][1]
        }
    }

    return count
};