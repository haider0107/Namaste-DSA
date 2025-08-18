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
 * @param {number} val
 * @return {TreeNode}
 */
var searchBST = function (root, val) {
  let node = null;

  function traversal(curr) {
    if (!curr) return;

    if (val === curr.val) {
      node = curr;
      return;
    } else if (val < curr.val) traversal(curr.left);
    else traversal(curr.right);
  }

  traversal(root);

  return node;
};
