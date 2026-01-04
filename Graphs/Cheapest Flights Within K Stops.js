/**
 * @param {number} n
 * @param {number[][]} flights
 * @param {number} src
 * @param {number} dst
 * @param {number} k
 * @return {number}
 */
var findCheapestPrice = function (n, flights, src, dst, k) {
  const graph = Array.from({ length: n }, () => []);

  for (let [u, v, w] of flights) {
    graph[u].push([v, w]);
  }

  const minCost = new Array(n).fill(Infinity);

  minCost[src] = 0;

  const q = [[src, 0, 0]];

  const bfs = () => {
    while (q.length) {
      let [node, weight, step] = q.shift();

      if (step > k) continue;

      for (let [neigh, neighWt] of graph[node]) {
        let newWt = weight + neighWt;
        if (newWt < minCost[neigh]) {
          minCost[neigh] = newWt;
          q.push([neigh, newWt, step + 1]);
        }
      }
    }
  };

  bfs();

  return minCost[dst] === Infinity ? -1 : minCost[dst];
};
