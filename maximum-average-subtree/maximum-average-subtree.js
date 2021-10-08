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
var maximumAverageSubtree = function(root) {
    const recurse = (node) => {
        if (!node) return {count: 0, sum: 0, maxAvg:0};
        let l = recurse(node.left);
        let r = recurse(node.right);
        let count = l.count + r.count + 1;
        let sum = l.sum + r.sum + node.val;
        let maxAvg = Math.max(l.maxAvg, r.maxAvg, sum / count);
        return {count, sum, maxAvg};
    }
    return recurse(root).maxAvg;
};