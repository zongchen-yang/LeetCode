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
 * @param {number} targetSum
 * @return {number[][]}
 */
var pathSum = function(root, targetSum) {
    let res = [];
    const recurse = (node, buffer, sum) => {
        if (!node) return;
        buffer.push(node.val);
        if (!node.left && !node.right && sum === node.val) {
            res.push(buffer.slice());
        }
        recurse(node.left, buffer, sum - node.val)
        recurse(node.right, buffer, sum - node.val)
        buffer.pop();
    }
    recurse(root, [], targetSum)
    return res;
};