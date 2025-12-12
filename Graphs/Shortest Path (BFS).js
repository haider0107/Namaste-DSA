// In this BFS code, the condition `if (distance[node] == Infinity)` works as a visited check so that each node is only discovered, assigned a path, and pushed into the queue once, which guarantees that the first path found to any node is the shortest one in an unweighted graph because BFS explores level by level; if we pushed every neighbor into the queue without this check, the same node could be enqueued and processed multiple times from different parents, leading to redundant work, possible incorrect updates to its path, and in graphs with cycles, potentially unbounded or infinite traversal, so this condition is essential both for correctness (shortest paths) and efficiency.[web:11][web:12]
function shortestPath(src, graph) {
  const paths = new Array(graph.length).fill(Infinity);

  paths[src] = [src];

  const q = [src];

  while (q.length) {
    const curr = q.shift();

    for (let node of graph[curr]) {
      if (paths[node] == Infinity) {
        const path = [...paths[curr]];
        path.push(node);

        paths[node] = path;
        
        q.push(node);
      }
    }
  }

  return paths;
}

const graph = [[1, 2], [3], [4], [5], [3], []];

console.log(shortestPath(0, graph));
