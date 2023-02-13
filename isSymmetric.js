//101. Symmetric Tree

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
let isSymmetric = function(root) {
  let res = true;

  //helper function
  const isMirror  = (node1,node2)=>{
    if (!node1 && !node2) {
      return;
    }
    if (!node1 || !node2 || node1.val !== node2.val) {
      res = false;
      return;
    }
    isMirror(node1.right,node2.left);
    isMirror(node1.left,node2.right);
  };

  isMirror(root,root);
  return res;
};

//input :array
//ouput: boolean