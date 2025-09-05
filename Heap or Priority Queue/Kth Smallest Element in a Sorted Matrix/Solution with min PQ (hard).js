/**
 * @param {number[][]} matrix
 * @param {number} k
 * @return {number}
 */
var kthSmallest = function (matrix, k) {
  let pq = new MinPriorityQueue((ele) => ele.val);

  let n = matrix.length;

  for (let i = 0; i < n; i++) {
    pq.enqueue({ row: i, col: 0, val: matrix[i][0] });
  }

  for (let i = 0; i < k - 1; i++) {
    let val = pq.dequeue();
    if (val.col + 1 < n) {
      pq.enqueue({
        row: val.row,
        col: val.col + 1,
        val: matrix[val.row][val.col + 1],
      });
    }
  }

  return pq.front();
};
