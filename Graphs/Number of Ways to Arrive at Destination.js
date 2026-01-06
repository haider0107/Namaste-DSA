/**
 * @param {number} n
 * @param {number[][]} roads
 * @return {number}
 */
var countPaths = function (n, roads) {
  const graph = Array.from({ length: n }, () => []);

  for (let [u, v, w] of roads) {
    graph[u].push([v, w]);
    graph[v].push([u, w]);
  }

  const minWt = new Array(n).fill(Infinity);
  const path = new Array(n).fill(0);
  const pq = new MinPriorityQueue((x) => x[1]);

  pq.push([0, 0]);
  minWt[0] = 0;
  path[0] = 1;

  while (pq.size()) {
    let [node, weight] = pq.pop();

    for (let [neigh, neighWt] of graph[node]) {
      let newWt = weight + neighWt;
      if (newWt < minWt[neigh]) {
        path[neigh] = path[node];
        minWt[neigh] = newWt;
        pq.push([neigh, newWt]);
      } else if (minWt[neigh] === newWt) {
        path[neigh] = (path[neigh] + path[node]) % (1e9 + 7);
      }
    }
  }

  return path[n - 1];
};
