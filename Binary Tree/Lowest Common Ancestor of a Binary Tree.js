/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
var lowestCommonAncestor = function (root, p, q) {
  let lca = null;

  function traversal(node) {
    if (!node) return 0;

    let count = 0;

    let leftCount = traversal(node.left);
    let rightCount = traversal(node.right);

    count = leftCount + rightCount;

    if (node.val === p.val || node.val === q.val) count++;

    if (count === 2 && lca === null) lca = node;

    return count;
  }

  traversal(root);

  return lca;
};
