function topologicalSort(n, adj) {
  // your solution here

  const ans = [];

  const q = [];

  const indegree = new Array(n).fill(0);

  // create indegree

  for (let i = 0; i < n; i++) {
    for (let node of adj[i]) {
      indegree[node]++;
    }
  }

  // get node in queue which have 0 indegree

  for (let i = 0; i < n; i++) {
    if (indegree[i] == 0) q.push(i);
  }

  // Run BFS and reduce indegree, check if indegree is 0 then add to queue

  while (q.length) {
    const curr = q.shift();
    ans.push(curr);

    for (let node of adj[curr]) {
      indegree[node]--;
      if (indegree[node] == 0) q.push(node);
    }
  }

  if (ans.length != n) {
    console.log("Graph has a cycle, and topo sort is not possible.");
    return [];
  }

  return ans;
}

module.exports = { topologicalSort };
