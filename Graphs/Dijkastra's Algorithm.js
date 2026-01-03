function dijkstras(src, graph) {
  const dist = new Array(graph.length).fill(Infinity);

  dist[src] = 0;

  let pq = new MinPriorityQueue();

  pq.enqueue([src, dist[src]]);

  while (pq.size()) {
    let curr = pq.dequeue();

    if (dist[curr[0]] < curr[1]) continue;

    for (let neigh of graph[curr[0]]) {
      let node = neigh[0];
      let distance = neigh[1];

      let totalDist = distance + curr[1];
      if (dist[node] > totalDist) {
        dist[node] = totalDist;
        pq.enqueue([node, totalDist]);
      }
    }
  }

  console.log(dist);
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

const graph = [
  [
    [1, 2],
    [2, 4],
  ],
  [
    [3, 7],
    [2, 1],
  ],
  [
    [4, 3],
    [5, 1],
  ],
  [[6, 1]],
  [
    [3, 2],
    [6, 5],
  ],
  [
    [3, 3],
    [6, 8],
  ],
  [],
];

console.log(dijkstras(0, graph));

// Time Complexity: O(E * log(V))
// Space Complexity: O(V)