class MaxPriorityQueue {
  constructor() {
    this.heap = [];
  }

  // Enqueue an item
  enqueue(value) {
    this.heap.push(value);
    this.heapifyUp();
  }

  heapifyUp() {
    let index = this.heap.length - 1;

    while (index > 0) {
      let parentIndex = Math.floor((index - 1) / 2);

      if (this.heap[parentIndex] < this.heap[index]) {
        this.swap(parentIndex, index);
        index = parentIndex;
      } else break;
    }
  }

  dequeue() {
    if (this.heap.length === 0) return null;
    const max = this.heap[0];
    const end = this.heap.pop();

    if (this.heap.length > 0) {
      this.heap[0] = end;
      this.heapifyDown();
    }

    return max;
  }

  heapifyDown() {
    let n = this.heap.length;

    let index = 0;
    while (true) {
      let left = index * 2 + 1;
      let right = index * 2 + 2;

      let largest = index;
      if (left < n && this.heap[largest] < this.heap[left]) largest = left;
      if (right < n && this.heap[largest] < this.heap[right]) largest = right;

      if (largest === index) break;
      this.swap(index, largest);
      index = largest;
    }
  }

  // View front item
  front() {
    return this.heap.length > 0 ? this.heap[0] : null;
  }

  size() {
    return this.heap.length;
  }

  // Is Empty?
  isEmpty() {
    return this.heap.length === 0;
  }

  swap(a, b) {
    [this.heap[a], this.heap[b]] = [this.heap[b], this.heap[a]];
  }
}

let pq = new MaxPriorityQueue();
pq.enqueue(2);
pq.enqueue(4);
pq.enqueue(6);
pq.enqueue(8);
pq.enqueue(10);
pq.enqueue(12);
console.log(pq.heap);
console.log(pq.dequeue());
console.log(pq.heap);
console.log(pq.dequeue());
console.log(pq.heap);
console.log(pq.dequeue());
console.log(pq.heap);
console.log(pq.dequeue());
console.log(pq.heap);
