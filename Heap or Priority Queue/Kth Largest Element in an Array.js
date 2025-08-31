/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findKthLargest = function (nums, k) {
  let pq = new MinPriorityQueue();

  for (let i = 0; i < nums.length; i++) {
    pq.enqueue(nums[i]);
    if (pq.size() > k) pq.dequeue();
  }

  return pq.front();
};

// Time Complexity: O(N * log(K))
// Space Complexity: O(K)

class MinPriorityQueue {
  constructor() {
    this.heap = [];
  }

  enqueue(val) {
    this.heap.push(val);
    this.heapifyUp();
  }

  dequeue() {
    if (this.heap.length === 0) return null;
    let min = this.heap[0];
    let end = this.heap.pop();

    if (this.heap.length > 0) {
      this.heap[0] = end;
      this.heapifyDown();
    }

    return min;
  }

  heapifyUp() {
    let i = this.heap.length - 1;
    while (i > 0) {
      let parent = Math.floor((i - 1) / 2);
      if (this.heap[parent] > this.heap[i]) this.swap(parent, i);
      else break;
    }
  }

  heapifyDown() {
    let n = this.heap.length;

    let i = 0;

    while (true) {
      let left = i * 2 + 1;
      let right = i * 2 + 2;

      let smallest = i;
      if (left < n && this.heap[smallest] > this.heap[left]) smallest = left;
      if (right < n && this.heap[smallest] > this.heap[right]) smallest = right;

      if (smallest != i) {
        this.swap(smallest, i);
        i = smallest;
      } else break;
    }
  }

  front() {
    return this.heap.length > 0 ? this.heap[0] : null;
  }

  swap(a, b) {
    [this.heap[a], this.heap[b]] = [this.heap[b], this.heap[a]];
  }
}
