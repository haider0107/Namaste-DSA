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
 * @param {number} k
 * @return {number}
 */
var kthSmallest = function (root, k) {
  let ele = null;

  function traversal(node) {
    if (ele) return;
    if (!node) return;

    traversal(node.left);

    if (k === 1) {
      ele = node.val;
    }
    k--;
    traversal(node.right);
  }

  traversal(root);

  return ele;
};
