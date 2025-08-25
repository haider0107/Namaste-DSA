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
var insertIntoBST = function (root, val) {
  if (!root) return new TreeNode(val);

  function traversal(node) {
    if (node.val > val) {
      if (node.left) {
        traversal(node.left);
      } else {
        node.left = new TreeNode(val);
        return;
      }
    } else {
      if (node.right) {
        traversal(node.right);
      } else {
        node.right = new TreeNode(val);
        return;
      }
    }
  }

  traversal(root);

  return root;
};





