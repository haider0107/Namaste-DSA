function primMST(n, graph) {
  const pq = new MinPriorityQueue();

  pq.enqueue([0, 0]);
  const visited = new Array(n).fill(false);

  let mst = 0;
  let totalEdge = 0;

  while (pq.size() && totalEdge < n) {
    let [node, weight] = pq.dequeue();

    if (visited[node]) continue;
    console.log([node, weight]);
    visited[node] = true;

    totalEdge++;
    mst += weight;

    for (let [neigh, neighWt] of graph[node]) {
      if (visited[neigh]) continue;
      pq.enqueue([neigh, neighWt]);
    }
  }

  return mst;
}

class MinPriorityQueue {
  constructor() {
    this.heap = [];
  }

  enqueue(val) {
    this.heap.push(val);
    this.heapifyUp();
  }

  size() {
    return this.heap.length;
  }

  dequeue() {
    if (this.heap.length === 0) return null;
    let min = this.heap[0];

    let last = this.heap.pop();

    if (this.heap.length > 0) {
      this.heap[0] = last;
      this.heapifyDown();
    }

    return min;
  }

  heapifyUp() {
    let i = this.heap.length - 1;
    while (i > 0) {
      let parent = Math.floor((i - 1) / 2);
      if (this.heap[parent][1] > this.heap[i][1]) {
        this.swap(parent, i);
        i = parent;
      } else break;
    }
  }

  heapifyDown() {
    let n = this.heap.length;

    let i = 0;

    while (true) {
      let left = i * 2 + 1;
      let right = i * 2 + 2;

      let small = i;

      if (left < n && this.heap[left][1] < this.heap[small][1]) small = left;

      if (right < n && this.heap[right][1] < this.heap[small][1]) small = right;

      if (small !== i) {
        this.swap(i, small);
        i = small;
      } else break;
    }
  }

  swap(a, b) {
    [this.heap[a], this.heap[b]] = [this.heap[b], this.heap[a]];
  }
}

// const graph = [
//     [[1, 4], [2, 2], [3, 5]],
//     [[0, 4], [3, 1]],
//     [[0, 2], [3, 3]],
//     [[1, 1], [2, 3]]
// ];

const graph = [
  [
    [1, 2],
    [3, 1],
    [4, 4],
  ],
  [
    [0, 2],
    [3, 3],
    [2, 3],
    [5, 7],
  ],
  [
    [1, 3],
    [3, 5],
    [5, 8],
  ],
  [
    [0, 1],
    [4, 9],
    [2, 5],
    [1, 3],
  ],
  [
    [0, 4],
    [3, 9],
  ],
  [
    [1, 7],
    [2, 8],
  ],
];

console.log(primMST(6, graph));
