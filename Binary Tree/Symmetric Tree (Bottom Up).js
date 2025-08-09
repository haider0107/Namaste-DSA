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
  function isSys(left, right) {
    if (!left && !right) return true;

    if (!left || !right) return false;

    return (
      left.val === right.val &&
      isSys(left.left, right.right) &&
      isSys(left.right, right.left)
    );
  }

  return isSys(root.left, root.right);
};
