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
 * @return {TreeNode}
 */
var invertTree = function (root) {
  // let invert = (node) =>{
  //     if(!node) return

  //     let temp = node.left
  //     node.left = node.right
  //     node.right = temp

  //     invert(node.left)
  //     invert(node.right)
  // }

  // invert(root)

  // return root

  if (!root) return root;

  let temp = root.left;
  root.left = root.right;
  root.right = temp;

  invertTree(root.left);
  invertTree(root.right);

  return root;
};
