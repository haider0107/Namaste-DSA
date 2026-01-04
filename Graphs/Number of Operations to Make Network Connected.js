/**
 * @param {number} n
 * @param {number[][]} connections
 * @return {number}
 */
var makeConnected = function (n, connections) {
  if (connections.length < n - 1) return -1;

  const graph = [];

  for (let [u, v] of connections) {
    if (!graph[u]) graph[u] = [];
    if (!graph[v]) graph[v] = [];
    graph[u].push(v);
    graph[v].push(u);
  }

  const visited = new Array(n).fill(false);

  console.log(graph);

  const dfs = (node) => {
    if (visited[node]) return false;

    visited[node] = true;

    if (!graph[node]) return true;
    for (let neigh of graph[node]) {
      dfs(neigh);
    }

    return true;
  };

  let component = 0;

  for (let i = 0; i < n; i++) {
    if (dfs(i)) {
      component++;
    }
  }

  console.log(component);

  return component - 1;
};
