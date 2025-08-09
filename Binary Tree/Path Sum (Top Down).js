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
 * @param {number} targetSum
 * @return {boolean}
 */
var hasPathSum = function (root, targetSum) {
  let flag = false;

  if (!root) return false;

  function traversal(node, sum) {
    if (!node) {
      return;
    }

    if (flag) return;

    sum += node.val;

    if (targetSum === sum) {
      if (!node.left && !node.right) {
        flag = true;
      }
    }

    traversal(node.left, sum);
    traversal(node.right, sum);
  }

  traversal(root, 0);

  return flag;
};
