/**
 * @param {number} n
 * @param {number[][]} edges
 * @param {number} source
 * @param {number} destination
 * @return {boolean}
 */
var validPath = function (n, edges, source, destination) {
  const graph = Array.from({ length: n }, () => []);

  // Build the graph
  for (let edge of edges) {
    let [u, v] = edge;
    graph[u].push(v);
    graph[v].push(u);
  }

  const queue = [source];

  const vis = new Array(n).fill(false);
  vis[source] = true;

  while (queue.length > 0) {
    let curr = queue.shift();

    if (curr === destination) return true;

    for (const n of graph[curr]) {
      if (!vis[n]) {
        vis[n] = true;
        queue.push(n);
      }
    }
  }

  return false;
};
