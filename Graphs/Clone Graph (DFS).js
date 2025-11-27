/**
 * // Definition for a Node.
 * function Node(val, neighbors) {
 *    this.val = val === undefined ? 0 : val;
 *    this.neighbors = neighbors === undefined ? [] : neighbors;
 * };
 */

/**
 * @param {Node} node
 * @return {Node}
 */

// Recursive
var cloneGraph = function (node1) {
  let map = new Map();

  const dfs = (node) => {
    if (!node) return null;

    if (!map.has(node)) {
      map.set(node, new Node(node.val));
    }

    for (let n of node.neighbors) {
      let cloneNode = map.get(node);

      if (!map.has(n)) {
        cloneNode.neighbors.push(dfs(n));
      } else {
        cloneNode.neighbors.push(map.get(n));
      }
    }

    return map.get(node);
  };

  return dfs(node1);
};
