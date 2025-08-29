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

  extract() {
    this.heap[0] = this.heap.at(-1);
    this.heap.pop();

    this.heapifyDown(0);
  }

  heapifyDown(index) {
    let leftIndex = this.getLeftChildIndex(index);
    let rightIndex = this.getRightChildIndex(index);

    let heapLen = this.heap.length;

    let smallest = index;

    if (leftIndex < heapLen && this.heap[leftIndex] < this.heap[smallest]) {
      smallest = leftIndex;
    }

    if (rightIndex < heapLen && this.heap[rightIndex] < this.heap[smallest]) {
      smallest = rightIndex;
    }

    if (smallest != index) {
      [this.heap[smallest], this.heap[index]] = [
        this.heap[index],
        this.heap[smallest],
      ];

      this.heapifyDown(smallest);
    }
  }
}

let heap = new MinHeap();

heap.insert(1);

console.log(heap.heap);

heap.extract();

// heap.extract();

console.log(heap.heap);
