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
var isValidBST = function(root, left = null, right = null) {
    if (!root) return true;
    if (left && left.val >= root.val) return false;
    if (right && right.val <= root.val) return false;
    return isValidBST(root.left, left, root) && isValidBST(root.right, root, right)
};