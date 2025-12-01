/**
 * @param {number[][]} graph
 * @return {number[][]}
 */
var allPathsSourceTarget = function (graph) {
  const res = [];

  
  const dfs = (path) => {
    const node = path[path.length - 1];
    if (node === graph.length - 1) {
      res.push([...path]);
      return;
    }

    for (const n of graph[node]) {
      path.push(n);

      dfs(path);

      path.pop();
    }
  };

  dfs([0], 0);

  return res;
};
