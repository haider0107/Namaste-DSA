function hasCycle(edges) {
  // your solution here

  const graph = {};

  for (let [u, v] of edges) {
    if (!graph[u]) graph[u] = [];
    if (!graph[v]) graph[v] = [];

    graph[u].push(v);
    graph[v].push(u);
  }

  const visited = new Set();

  const dfs = (curr, parent) => {
    visited.add(curr);
    for (let neigh of graph[curr]) {
      if (!visited.has(neigh)) {
        return dfs(neigh, curr);
      } else if (neigh !== parent) {
        return true;
      }
    }

    return false;
  };

  return dfs(0, -1);
}
