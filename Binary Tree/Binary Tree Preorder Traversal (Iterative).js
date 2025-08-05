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
 * @return {number[]}
 */
var preorderTraversal = function (root) {
  // let res = []

  // function traversal(node){
  //     if(node === null) return

  //     res.push(node.val)

  //     traversal(node.left)
  //     traversal(node.right)
  // }

  // traversal(root)

  // return res

  let stack = [];
  if (root) stack.push(root);

  let ans = [];

  while (stack.length) {
    let curr = stack.pop();

    ans.push(curr.val);

    if (curr.right) stack.push(curr.right);
    if (curr.left) stack.push(curr.left);
  }

  return ans;
};
