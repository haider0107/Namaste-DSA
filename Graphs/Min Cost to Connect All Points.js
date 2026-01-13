/**
 * @param {number[][]} points
 * @return {number}
 */
var minCostConnectPoints = function (points) {
  const graph = Array.from({ length: points.length }, () => []);

  for (let i = 0; i < points.length; i++) {
    for (let j = 0; j < points.length; j++) {
      if (i !== j) {
        const distance =
          Math.abs(points[i][0] - points[j][0]) +
          Math.abs(points[i][1] - points[j][1]);

        graph[i].push([j, distance]);
        // graph[j].push([i, distance])
      }
    }
  }

  const pq = new MinPriorityQueue((x) => x[1]);

  pq.push([0, 0]);

  let mst = 0;

  const visited = new Array(points.length).fill(false);
  while (pq.size()) {
    const curr = pq.pop();

    if (!visited[curr[0]]) {
      visited[curr[0]] = true;
      mst += curr[1];

      for (let neigh of graph[curr[0]]) {
        if (!visited[neigh[0]]) {
          pq.push(neigh);
        }
      }
    }
  }

  return mst;
};
