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
 * @param {TreeNode} subRoot
 * @return {boolean}
 */
var isSubtree = function (root, subRoot) {
  let hashRoot = serilize(root);
  let hashSubRoot = serilize(subRoot);

  // console.log(hashRoot)
  // console.log(hashSubRoot)

  return hashRoot.includes(hashSubRoot);
};

function serilize(root) {
  let hash = "";

  function traversal(node) {
    if (!node) {
      hash += "-#";
      return;
    }

    hash += "-" + node.val;

    traversal(node.left);
    traversal(node.right);
  }

  traversal(root);

  return hash;
}
