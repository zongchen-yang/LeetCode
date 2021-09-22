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
var isSymmetric = function(root) {
    const recurse = (left, right) => {
        if (!left && !right) return true;
        if (!left || !right || left.val !== right.val) return false;
        return recurse(left.right, right.left) && recurse(left.left, right.right);
    }
    return recurse(root.left, root.right);
};