/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isSymmetric = function (root) {
  let isSys = true;

  function traversal(node1, node2) {
    if (!node1 && !node2) return;

    if (node1?.val !== node2?.val) {
      isSys = false;
      return;
    }

    traversal(node1.left, node2.right);
    traversal(node1.right, node2.left);
  }

  traversal(root.left, root.right);

  return isSys;
};
