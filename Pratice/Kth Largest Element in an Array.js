class MinPriorityQueue {
  constructor() {
    this.heap = [];
  }

  getParentIndex(index) {
    return Math.floor((index - 1) / 2);
  }

  getLeftIndex(index) {
    return index * 2 + 1;
  }

  getRightIndex(index) {
    return index * 2 + 2;
  }

  enqueue(value) {
    this.heap.push(value);
    this.heapifyUp();
  }

  swap(a, b) {
    [this.heap[a], this.heap[b]] = [this.heap[b], this.heap[a]];
  }

  dequeue() {
    let min = this.heap[0];
    let last = this.heap.pop();

    if (this.heap.length > 0) {
      this.heap[0] = last;
      this.heapifyDown();
    }
  }

  heapifyDown() {
    let n = this.heap.length;

    let index = 0;

    while (true) {
      let leftIndex = this.getLeftIndex(index);
      let rightIndex = this.getRightIndex(index);
      let smallest = index;
      if (leftIndex < n && this.heap[leftIndex] < this.heap[smallest]) {
        smallest = leftIndex;
      }
      if (rightIndex < n && this.heap[rightIndex] < this.heap[smallest]) {
        smallest = rightIndex;
      }

      if (smallest === index) break;
      this.swap(smallest, index);
      index = smallest;
    }
  }

  heapifyUp() {
    let index = this.heap.length - 1;

    while (index > 0) {
      let parentIndex = this.getParentIndex(index);

      if (this.heap[parentIndex] > this.heap[index]) {
        this.swap(parentIndex, index);
        index = parentIndex;
      } else break;
    }
  }
}
