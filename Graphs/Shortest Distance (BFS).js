function shortestDistance(src, graph) {
  const distance = new Array(graph.length).fill(Infinity);

  distance[src] = 0;

  const q = [src];

  while (q.length) {
    const curr = q.shift();

    for (let node of graph[curr]) {
      if (distance[node] == Infinity) {
        distance[node] = distance[curr] + 1;
        q.push(node);
      }
    }
  }

  return distance;
}

const graph = [[1, 2],[3], [4], [5], [3], []];

console.log(shortestDistance(0, graph));
