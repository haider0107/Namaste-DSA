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

  const vis = new Array(n).fill(false);
  vis[source] = true;

  const dfs = (curr) => {
    if (curr === destination) return true;

    for (const n of graph[curr]) {
      if (!vis[n]) {
        vis[n] = true;

        if (dfs(n)) return true;
      }
    }
  };

  if (dfs(source)) return true;

  return false;
};
