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
var cloneGraph = function (node) {
  if (!node) return null;

  const q = [node];
  let map = new Map();
  map.set(node, new Node(node.val));

  while (q.length > 0) {
    let curr = q.shift();
    for (let n of curr.neighbors) {
      if (!map.has(n)) {
        map.set(n, new Node(n.val));
        q.push(n);
      }
      let cloneNode = map.get(curr);
      cloneNode.neighbors.push(map.get(n));
    }
  }

  return map.get(node);
};
