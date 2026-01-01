function bellman_ford(edges, V, src) {
  const dist = new Array(V).fill(Infinity);

  dist[src] = 0;

  for (let i = 0; i < V; i++) {
    let update = false;
    for (let [u, v, w] of edges) {
      if (dist[u] + w < dist[v]) {
        dist[v] = dist[u] + w;
        update = true;
      }
    }

    if (!update) break;
  }

  return dist;
}

const edges = [
  //[u, v, w]
  [0, 1, 6],
  [0, 2, 5],
  [0, 3, 5],
  [1, 4, -1],
  [2, 1, -2],
  [2, 4, 1],
  [3, 2, -2],
  [3, 5, -1],
  [4, 6, 3],
  [5, 6, 3],
];

const V = 7;

console.log(bellman_ford(edges, V, 0));
