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
 * @return {number}
 */
var goodNodes = function (root) {
  let count = 0;

  function traversal(node, max) {
    if (!node) return;

    if (node.val >= max) {
      count++;
      max = node.val;
    }

    traversal(node.left, max);
    traversal(node.right, max);
  }

  traversal(root, root.val);

  return count;
};
