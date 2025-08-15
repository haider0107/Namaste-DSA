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
var maxPathSum = function (root) {
  let ans = -Infinity;

  function traversal(node) {
    if (!node) return 0;

    let leftMax = traversal(node.left);
    let rightMax = traversal(node.right);

    let total = node.val;

    if (leftMax > 0) total += leftMax;
    if (rightMax > 0) total += rightMax;

    ans = Math.max(ans, total);

    return Math.max(node.val + leftMax, node.val + rightMax, node.val);
  }

  traversal(root);

  return ans;
};
