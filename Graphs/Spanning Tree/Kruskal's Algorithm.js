class UnionFind {
  constructor(n) {
    this.parent = new Array(n).fill(0).map((_, i) => i);
    this.rank = new Array(n).fill(0);
  }

  find(x) {
    if (this.parent[x] !== x) {
      this.parent[x] = this.find(this.parent[x]);
    }

    return this.parent[x];
  }

  union(x, y) {
    let rootY = this.find(y);
    let rootX = this.find(x);

    if (rootX === rootY) return false;

    if (this.rank[rootX] > this.rank[rootY]) {
      this.parent[rootY] = rootX;

      this.rank[rootX]++;
    } else {
      this.parent[rootX] = rootY;

      this.rank[rootY]++;
    }

    return true;
  }
}

function Kruskal(n, edges) {
  edges.sort((a, b) => a[2] - b[2]);

  const uf = new UnionFind(n);
  let mst = 0;

  for (let [u, v, w] of edges) {
    if (uf.union(u, v)) {
      mst += w;
    }
  }

  return mst;
}

const edges = [
  [0, 1, 4],
  [0, 2, 4],
  [1, 2, 2],
  [2, 3, 3],
  [2, 5, 2],
  [2, 4, 4],
  [3, 4, 3],
  [5, 4, 3],
];

console.log(Kruskal(6, edges));

// Time Complexity: O(E * log(E))
// Space Complexity: O(V)