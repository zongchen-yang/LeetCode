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
var postorderTraversal = function(root) {
    if (!root) return [];
    const res = [];
    const stack = [root];
    while (stack.length) {
        let curr = stack.pop();
        res.unshift(curr.val);
        if (curr.left) stack.push(curr.left);
        if (curr.right) stack.push(curr.right);
    }
    return res;
};