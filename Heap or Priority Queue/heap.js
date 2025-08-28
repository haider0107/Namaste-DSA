// Min Heap

class MinHeap {
  constructor() {
    // this.heap = []
    this.heap = [5, 10, 20, 30];
  }

  getLeftChildIndex(i) {
    return 2 * i + 1;
  }

  getRightChildIndex(i) {
    return 2 * i + 2;
  }

  getParentIndex(i) {
    return Math.floor((i - 1) / 2);
  }

  insert(val) {
    this.heap.push(val);

    this.heapifyUp(this.heap.length - 1);
  }

  heapifyUp(index) {
    while (index > 0) {
      const parentIndex = this.getParentIndex(index);

      if (this.heap[parentIndex] > this.heap[index]) {
        let temp = this.heap[parentIndex];
        this.heap[parentIndex] = this.heap[index];
        this.heap[index] = temp;

        // [this.heap[index], this.heap[parentIndex]] = [
        //   this.heap[parentIndex],
        //   this.heap[index],
        // ];

        index = parentIndex;
      } else {
        break;
      }
    }
  }
}

let heap = new MinHeap();

heap.insert(1);

console.log(heap.heap);
