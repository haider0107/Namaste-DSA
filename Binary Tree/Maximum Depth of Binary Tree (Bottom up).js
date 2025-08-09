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
var maxDepth = function (root) {
  // if(!root) return 0

  // let maxDepth = 0

  // function traversal(node,i){
  //     if(!node) return

  //     maxDepth = Math.max(maxDepth,i)

  //     traversal(node.left,i+1)
  //     traversal(node.right,i+1)
  // }

  // traversal(root,0)

  // return maxDepth + 1

  if (!root) return 0;

  let left = maxDepth(root.left);
  let right = maxDepth(root.right);

  return 1 + Math.max(left, right);
};
