/**
 * @param {number[][]} matrix
 * @param {number} k
 * @return {number}
 */
var kthSmallest = function (matrix, k) {
  let pq = new MaxPriorityQueue();

  function add(val) {
    pq.enqueue(val);
    if (pq.size() > k) pq.dequeue();
  }

  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      add(matrix[i][j]);
    }
  }

  return pq.front();
};
