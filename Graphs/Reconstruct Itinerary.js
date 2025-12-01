/**
 * @param {string[][]} tickets
 * @return {string[]}
 */
var findItinerary = function (tickets) {
  // we can not follow greedy -> backtracking
  // sort the adj list to maintain the lexical order
  // keep removing edges from adj list to mark them as visited

  const graph = {};

  for (let [from, to] of tickets) {
    if (!graph[from]) graph[from] = [];
    graph[from].push(to);
  }

  for (let node in graph) {
    graph[node].sort();
  }

  const path = [];

  const dfs = (curr) => {
    let destination = graph[curr] || [];

    while (destination.length) {
      let neigh = graph[curr].shift();

      dfs(neigh);
    }

    path.push(curr);
  };

  dfs("JFK");

  return path.reverse();
};
