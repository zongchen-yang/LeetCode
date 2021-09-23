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
var isBalanced = function(root) {
    if (!root) return true;
    const recurse = (node, level = 0) => {
        if (!node) return level;
        return Math.max(recurse(node.left, level + 1), recurse(node.right, level + 1));
    }
    return Math.abs(recurse(root.left, 0) - recurse(root.right, 0)) < 2 && isBalanced(root.left) && isBalanced(root.right)
};