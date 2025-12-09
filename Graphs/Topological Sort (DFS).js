function topologicalSort(n, adj) {
  // your solution here
  const ans = [];

  const visited = new Set();

  function dfs(curr) {
    visited.add(curr);

    for (let node of adj[curr]) {
      if (!visited.has(node)) {
        dfs(node);
      }
    }

    ans.push(curr);
  }

  for (let i = 0; i < n; i++) {
    if (!visited.has(i)) {
      dfs(i);
    }
  }

  return ans.reverse();
}
