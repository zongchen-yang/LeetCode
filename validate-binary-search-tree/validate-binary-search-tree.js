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
var isValidBST = function(root, leftP = null, rightP = null) {
    if (!root) return true;
    if (leftP && root.val <= leftP.val) return false;
    if (rightP && root.val >= rightP.val) return false
    return isValidBST(root.left, leftP, root) && isValidBST(root.right, root, rightP);
};